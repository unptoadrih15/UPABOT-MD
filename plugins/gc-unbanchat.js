let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no está baneado!!*')
  chat.isBanned = false
  m.reply('*✅ Listo... chat desbaneado!*')
}
handler.command = /^unbanchat$/i
handler.admin = true
export default handler
