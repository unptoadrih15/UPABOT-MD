let handler = async (m, { conn, command, usedPrefix, text }) => {
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚂𝙰𝚁 *${usedPrefix}listmsg* *𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' 𝙽𝙾 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙴𝙽 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂*`
let _m = await conn.serializeM(msgs[text])
await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^(ver|get(vn|msg|video|audio|img|sticker))$/i
handler.rowner = false
export default handler
