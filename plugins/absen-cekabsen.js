let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*𝙽𝚘 𝚑𝚊𝚢 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘!*_\n\n*${usedPrefix}asistencia* - 𝙿𝚊𝚛𝚊 𝚎𝚖𝚙𝚎𝚣𝚊𝚛 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀 」*

𝙵𝚎𝚌𝚑𝚊: ${date}
${conn.absen[id][2]}

┌ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝚂𝙴𝙽𝚃𝙴𝚂:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
export default handler
