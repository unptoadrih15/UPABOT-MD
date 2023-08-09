import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    if (before !== user.level) {
    m.reply(`*╭━━━[ 𝗦𝗨𝗕𝗜𝗦𝗧𝗘 𝗗𝗘 𝗡𝗜𝗩𝗘𝗟 ]━━━━⬣*
*┃ ✨ Bien hecho ! *${name}*
*┃                       [116] → [117]*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ FECHA: 29/7/2023, 04.59.58*
*╰━━━〔 𓃠 𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍𝕭𝖔𝖙 〕━━━━━⬣*

*_Cuanto más interactúes con UpaBot-MD, mayor será tu nivel!!_*')}\n*┃◇┗─────────*\n*╚━━━━━━━━━━━*`.trim())
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
}}		
