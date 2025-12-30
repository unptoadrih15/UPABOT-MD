import { Boom } from '@hapi/boom'
import {
  makeWASocket,
  DisconnectReason,
  fetchLatestBaileysVersion,
  useMultiFileAuthState
} from '@whiskeysockets/baileys'

import fs from 'fs'
import path from 'path'
import P from 'pino'
import chalk from 'chalk'
import lodash from 'lodash'
import { fileURLToPath } from 'url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import yargs from 'yargs'

/*━━━━━━━━━━━━━━━━━━━
  GLOBAL SETUP
━━━━━━━━━━━━━━━━━━━*/

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

global.opts = yargs(process.argv.slice(2)).parse()
global.prefix = /^[.!/#$]/

global.db = new Low(
  new JSONFile('./database.json'),
  { users: {}, chats: {}, settings: {} }
)

await global.db.read()
global.db.data ||= { users: {}, chats: {}, settings: {} }

/*━━━━━━━━━━━━━━━━━━━
  AUTH SESSION
━━━━━━━━━━━━━━━━━━━*/

const authFolder = './session'
const { state, saveCreds } = await useMultiFileAuthState(authFolder)
const { version } = await fetchLatestBaileysVersion()

/*━━━━━━━━━━━━━━━━━━━
  SOCKET
━━━━━━━━━━━━━━━━━━━*/

const conn = makeWASocket({
  version,
  logger: P({ level: 'silent' }),
  printQRInTerminal: true,
  auth: state,
  browser: ['UpaBot-MD', 'Chrome', '1.0.0']
})

global.conn = conn

/*━━━━━━━━━━━━━━━━━━━
  CONNECTION EVENTS
━━━━━━━━━━━━━━━━━━━*/

conn.ev.on('connection.update', (update) => {
  const { connection, lastDisconnect } = update

  if (connection === 'open') {
    console.log(chalk.green('✅ Conectado a WhatsApp'))
  }

  if (connection === 'close') {
    const reason = new Boom(lastDisconnect?.error)?.output?.statusCode

    if (reason !== DisconnectReason.loggedOut) {
      console.log(chalk.yellow('🔄 Reconectando...'))
      startBot()
    } else {
      console.log(chalk.red('❌ Sesión cerrada'))
    }
  }
})

conn.ev.on('creds.update', saveCreds)

/*━━━━━━━━━━━━━━━━━━━
  MESSAGE HANDLER
━━━━━━━━━━━━━━━━━━━*/

conn.ev.on('messages.upsert', async ({ messages }) => {
  const m = messages[0]
  if (!m.message || m.key.fromMe) return

  const text =
    m.message.conversation ||
    m.message.extendedTextMessage?.text ||
    ''

  if (!text.startsWith('.')) return

  const command = text.slice(1).trim().toLowerCase()

  if (command === 'ping') {
    await conn.sendMessage(m.key.remoteJid, { text: '🏓 Pong!' })
  }
})

/*━━━━━━━━━━━━━━━━━━━
  PLUGINS (HOT RELOAD)
━━━━━━━━━━━━━━━━━━━*/

global.plugins = {}
const pluginDir = path.join(__dirname, 'plugins')

const loadPlugins = async () => {
  for (const file of fs.readdirSync(pluginDir)) {
    if (!file.endsWith('.js')) continue
    const pluginPath = path.join(pluginDir, file)
    const module = await import(pluginPath + '?update=' + Date.now())
    global.plugins[file] = module.default || module
  }
}

await loadPlugins()

fs.watch(pluginDir, async () => {
  console.log(chalk.cyan('♻️ Recargando plugins...'))
  await loadPlugins()
})

/*━━━━━━━━━━━━━━━━━━━
  CLEAN SESSIONS
━━━━━━━━━━━━━━━━━━━*/

setInterval(() => {
  const files = fs.readdirSync(authFolder)
  for (const file of files) {
    if (file !== 'creds.json') {
      fs.unlinkSync(path.join(authFolder, file))
    }
  }
}, 1000 * 60 * 30)

/*━━━━━━━━━━━━━━━━━━━
  START
━━━━━━━━━━━━━━━━━━━*/

async function startBot () {
  console.log(chalk.blue('🚀 Iniciando bot...'))
}

startBot()
