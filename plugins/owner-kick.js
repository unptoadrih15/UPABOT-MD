let handler = async (m, { conn, participants }) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ ππ πΎπππΌππΏπ\n#on restrict | #off restrict\nππ ππππππππΌπππ πΏππ½π πΌπΎππππΌπ ππ πΎπππΌππΏπ`
  if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien del grupo para eliminarlo'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
  if (user.includes(owr)) return m.reply('No puedo eliminarlo\'a por que el creΓ³ el grupo')
  conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  m.reply(`βSe eliminΓ³ a la rata de *@${user.split('@')[0]}*`, null, { mentions: [user] })
}

handler.help = ['kick']
handler.tags = ['adm']
handler.command = /^(okick)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true

export default handler
