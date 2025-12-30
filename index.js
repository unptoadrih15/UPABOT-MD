import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import chalk from "chalk"
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, './package.json')) 
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
say('UpaBot-MD', {
font: 'chrome',
align: 'center',
gradient: ['red', 'magenta']})
say(`Creado por Unptoadrih15`, {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']})

var isRunning = false

process.on('uncaughtException', (err) => {
if (err.code === 'ENOSPC') {
console.error('Se ha detectado ENOSPC (sin espacio o límite de watchers alcanzado), reiniciando....')
} else {
console.error('Error no capturado:', err)
}
process.exit(1)
})

async function start(file) {
if (isRunning) return
isRunning = true
const currentFilePath = new URL(import.meta.url).pathname
let args = [join(__dirname, file), ...process.argv.slice(2)]
say([process.argv[0], ...args].join(' '), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
})
setupMaster({exec: args[0], args: args.slice(1)})
let p = fork()
p.on('message', (data) => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount())
rl.on('line', (line) => {
p.emit('message', line.trim())
})
}

start('main.js')
