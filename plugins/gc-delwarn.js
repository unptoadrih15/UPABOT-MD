let handler = async (m) => {
  let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  if (!mention) throw `*_Menciona a un usuario_*!`
  let warn = global.db.data.users[mention].warn
  if (warn > 0) {
    global.db.data.users[mention].warn -= 1
    m.reply('⚠️ *Se le quito una advertencia -1*')
    m.reply(`*_El administrador redujo su advertencia a_* ${warn - 1}`, mention)
  } else if (warn == 0) {
    m.reply('*_El usuario no tiene ninguna advertencia_*')
  }
}

handler.help = ['Delwarn @user']
handler.tags = ['group']
handler.command = /^delwarn|unwarn$/i

handler.group = true
handler.admin = true

export default handler