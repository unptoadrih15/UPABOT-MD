let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*π½π πππ’ ππππππππππ ππ ππππ πππππ!*_\n\n*${usedPrefix}mulaiabsen* - πΏπππ πππππ£ππ`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*π΄ππππ πΏπππππππ!*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `β ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*γ ππππππππππ γ*

π΅ππππ: ${date}
${conn.absen[id][2]}

βγ π»πΈπππ° π³π΄ π°ππΈπππ΄π½π²πΈπ° γ
β 
β Total: ${absen.length}
${list}
βββββ

`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['presente']
handler.tags = ['absen']
handler.command = /^(absen|presente)$/i
handler.group = true
export default handler
