import util from 'util'
import path from 'path'
import fs from 'fs'

let handler = async (m, { conn }) => {
let videomenu = fs.readFileSync(`./media/foto de adri.mp4`)
conn.sendMessage(m.chat, { video: videomenu, gifPlayback: true, caption: 'aqui esta la foto de mi creador 🤭\n\nsi tocas 2 veces el gif se reproduce con sonido'}, { quoted: m })
}
handler.customPrefix = /foto de Adri|foto adri|foto adrih|foto del creador|foto de Unptoadrih15/i
handler.command = new RegExp
export default handler
