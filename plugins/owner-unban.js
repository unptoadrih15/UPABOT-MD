import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, text}) => {
    if (!text) throw '*A quien quiere desbanear? etiquete a la persona con el @*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*Etiquete a una persona con el @*'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `*✅ A sus ordenes mirey, usuario desbaneado*`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.owner = false
handler.premium = true

export default handler
