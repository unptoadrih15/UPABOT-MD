let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Β‘π½π πππ’ ππππππππππ ππ ππππ πππππ!*_\n\n*${usedPrefix}asistencia* - πΏπππ πππππ£ππ ππππππππππ`
    delete conn.absen[id]
    m.reply(`ππ πππππππ ππ ππππππππππ ππ ππππ πππππ!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(del|hapus)asistencia$/i
handler.group = true
handler.admin = true
export default handler
