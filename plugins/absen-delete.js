let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*¡𝙽𝚘 𝚑𝚊𝚢 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘!*_\n\n*${usedPrefix}asistencia* - 𝙿𝚊𝚛𝚊 𝚎𝚖𝚙𝚎𝚣𝚊𝚛 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊`
    delete conn.absen[id]
    m.reply(`𝚂𝚎 𝚎𝚕𝚒𝚖𝚒𝚗𝚘 𝚕𝚊 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊 𝚍𝚎 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(del|hapus)asistencia$/i
handler.group = true
handler.admin = true
export default handler
