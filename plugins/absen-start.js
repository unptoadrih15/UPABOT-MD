let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*𝙰𝚞𝚗 𝚑𝚊𝚢 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝!*_\n\n*${usedPrefix}delasitencia* - 𝙿𝚊𝚛𝚊 𝚋𝚘𝚛𝚛𝚊𝚛 𝚕𝚊 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊`
    }
    conn.absen[id] = [
        m.reply(`𝙸𝚗𝚒𝚌𝚒𝚘 𝚌𝚘𝚗 𝚎𝚡𝚒𝚝𝚘\n\n*${usedPrefix}presente* - 𝙿𝚊𝚛𝚊 𝚎𝚜𝚝𝚊𝚛 𝚙𝚛𝚎𝚜𝚎𝚗𝚝𝚎\n*${usedPrefix}cekabsen* - 𝙿𝚊𝚛𝚊 𝚌𝚘𝚖𝚙𝚛𝚘𝚋𝚊𝚛 𝚕𝚊 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊\n*${usedPrefix}delasistencia* - 𝙿𝚊𝚛𝚊 𝚋𝚘𝚛𝚛𝚊𝚛 𝚕𝚘𝚜 𝚍𝚊𝚝𝚘𝚜 𝚍𝚎 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊`),
        [],
        text
    ]
}
handler.help = ['asistencia [teks]']
handler.tags = ['absen']
handler.command = /^(asis|mulai)tencia$/i
handler.group = true
handler.admin = true
export default handler
