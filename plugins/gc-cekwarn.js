let handler = async (m, { conn }) => {
      let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
      let warn = global.db.data.users[mention].warn
      m.reply(`Tienes En Total : ${warn} `)
}

handler.help = ['Cekwarn @user']
handler.tags = ['group']
handler.command = /^cekwarn$/i

handler.group = true

export default handler