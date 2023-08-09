import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┌───⊷ *NIVEL*
▢ Nombre : *${name}*
▢ Nivel : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
└──────────────

Te falta *${max - user.exp}* de *XP* para subir de nivel
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Subiste de nivel ${conn.getName(m.sender)}!`
        let str = `
*╭━━━[ 𝗦𝗨𝗕𝗜𝗦𝗧𝗘 𝗗𝗘 𝗡𝗜𝗩𝗘𝗟 ]━━━━⬣*
*┃ ✨ Bien hecho !  *${name}*
*┃                       [116] → [117]*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ FECHA: 29/7/2023, 04.59.58*
*╰━━━〔 𓃠 𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍𝕭𝖔𝖙 〕━━━━━⬣*

*_Cuanto más interactúes con UpaBot-MD, mayor será tu nivel!!_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
