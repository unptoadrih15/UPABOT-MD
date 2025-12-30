import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { createInterface } from 'readline'
import yargs from 'yargs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author } = require(join(__dirname, './package.json'))

const rl = createInterface(process.stdin, process.stdout)

// ✅ Banner simple (sin cfonts)
console.log(
  chalk.redBright.bold('\n==============================')
)
console.log(
  chalk.magentaBright.bold('        UpaBot-MD')
)
console.log(
  chalk.redBright('   Creado por Unptoadrih15')
)
console.log(
  chalk.redBright.bold('==============================\n')
)

let isRunning = false

/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true

  let args = [join(__dirname, file), ...process.argv.slice(2)]

  setupMaster({
    exec: args[0],
    args: args.slice(1),
  })

  let p = fork()

  p.on('message', data => {
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start(file)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })

  p.on('exit', (_, code) => {
    isRunning = false
    console.error(chalk.red('⚠️ Error inesperado ⚠️'), code)

    p.process.kill()
    start(file)

    if (process.env.pm_id) {
      process.exit(1)
    } else {
      process.exit()
    }
  })

  let opts = new Object(
    yargs(process.argv.slice(2))
      .exitProcess(false)
      .parse()
  )

  if (!opts['test'])
    if (!rl.listenerCount())
      rl.on('line', line => {
        p.emit('message', line.trim())
      })
}

start('main.js')

// 🔄 Hot reload
watchFile(import.meta.url, () => {
  unwatchFile(import.meta.url)
  console.log(chalk.yellowBright('Archivo index.js actualizado'))
  process.exit(0)
})
