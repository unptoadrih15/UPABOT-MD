import { dirname, join } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import cluster from 'cluster' // Importación completa para mayor compatibilidad
import { createInterface } from 'readline'
import chalk from 'chalk'

// Configuración de rutas compatible con Windows y Linux
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)
const { name, author } = require(join(__dirname, './package.json'))

const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('UpaBot-MD', {
    font: 'chrome',
    align: 'center',
    gradient: ['red', 'magenta']
})

say(`Creado por ${author || 'Unptoadrih15'}`, {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
})

let isRunning = false

/**
 * Inicia el proceso principal del bot
 * @param {String} file Archivo a ejecutar (ej: main.js)
 */
async function start(file) {
    if (isRunning) return
    isRunning = true

    const args = [join(__dirname, file), ...process.argv.slice(2)]
    
    // Configuración del cluster (actualizado para Node.js 2025)
    if (cluster.setupPrimary) {
        cluster.setupPrimary({
            exec: args[0],
            args: args.slice(1),
        })
    } else {
        cluster.setupMaster({ // Retrocompatibilidad
            exec: args[0],
            args: args.slice(1),
        })
    }

    let p = cluster.fork()

    // Manejo de mensajes entre el Index y el Bot
    p.on('message', (data) => {
        console.log(chalk.cyan(`[SISTEMA] Mensaje recibido: ${data}`))
        switch (data) {
            case 'reset':
                console.log(chalk.yellow('[SISTEMA] Reiniciando proceso...'))
                p.process.kill()
                isRunning = false
                start.apply(this, arguments)
                break
            case 'uptime':
                p.send(process.uptime())
                break
        }
    })

    // Manejo de salida del proceso
    p.on('exit', (code) => {
        isRunning = false
        console.error(chalk.red(`[ERROR] El proceso se detuvo con código: ${code}`))
        if (code !== 0) {
            console.log(chalk.green('[SISTEMA] Reiniciando bot automáticamente...'))
            start(file)
        }
    })

    // Reenvío de comandos de la terminal al bot
    let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
    if (!opts['test']) {
        rl.on('line', (line) => {
            p.send(line.trim()) // Cambiado de .emit a .send para que el bot reciba el comando
        })
    }
}

// Captura de errores críticos para evitar caídas
process.on('uncaughtException', (err) => {
    if (err.code === 'ENOSPC') {
        console.error(chalk.red('[CRÍTICO] Sin espacio en disco o límite de watchers alcanzado.'))
    } else {
        console.error(chalk.red('[ERROR NO CAPTURADO]:'), err)
    }
    process.exit(1)
})

// Punto de entrada
start('main.js')
