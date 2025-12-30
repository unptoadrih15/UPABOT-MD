// simple.js

import makeWASocket, { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import P from 'pino';
import fs from 'fs';

// Configura el logger para que sea silencioso y no llene la consola
const logger = P({ level: 'silent' });

async function connectToWhatsApp() {
    // Carga o crea el estado de autenticación (guardado en la carpeta 'auth_info')
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    // Obtiene la versión más reciente de Baileys
    const { version } = await fetchLatestBaileysVersion();
    
    console.log(`Usando versión de WA v${version.join(".")}`);

    const sock = makeWASocket({
        version,
        auth: state,
        logger,
        printQRInTerminal: true, // Imprime el QR en la terminal para escanear
    });

    // Guarda las credenciales cuando se actualizan (cada vez que envías/recibes mensajes)
    sock.ev.on('creds.update', saveCreds);

    // Maneja los eventos de conexión y reconexión
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Conexión cerrada. Intentando reconectar:', shouldReconnect);
            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('Conexión abierta exitosamente!');
        }
    });

    // Maneja la recepción de mensajes
    sock.ev.on('messages.upsert', async ({ messages, type }) => {
        console.log('Mensajes recibidos', messages.message);
        if (type === 'notify' && messages.key.remoteJid) {
            for (const message of messages) {
                // Ejemplo simple de respuesta: si recibes "Hola", responde "Hola Mundo!"
                if (message.message?.conversation?.toLowerCase() === 'hola') {
                    await sock.sendMessage(message.key.remoteJid, { text: '¡Hola Mundo desde Baileys!' });
                }
            }
        }
    });
}

// Inicia la función principal
connectToWhatsApp();
