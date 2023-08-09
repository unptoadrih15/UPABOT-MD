let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    conn.reply(m.chat, `*${global.db.data.users[who].limit}* diamantes💎 Restantes\n*Puedes comprar diamantes *
*usando los comandos:*
*.buy <cantidad>*
*.buyall* para comprar todos los diamantes que puedas`, m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit|diamantes)$/i
export default handler
