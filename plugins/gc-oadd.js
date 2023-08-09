let handler = async (m, { conn, participants, add }) => {
if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien o responde al mensaje para añadirlo'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
   await conn.groupParticipantsUpdate(m.chat, [user], 'add')
  m.reply(`Ya agregue a la rata de *@${user.split('@')[0]}*`, null, { mentions: [user] })
}
handler.help = ['add']
handler.tags = ['adm']
handler.command = /^(metelo|oadd|o\+)$/i
handler.owner = false
handler.group = true
handler.admin = true
export default handler
