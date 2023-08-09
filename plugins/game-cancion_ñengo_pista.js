let handler = async (m, { conn }) => {
    conn.tebaklagu2 = conn.tebaklagu2 ? conn.tebaklagu2 : {}
    let id = m.chat
    if (!(id in conn.tebaklagu2)) throw false
    let json = conn.tebaklagu2[id][1]
    let nya = json.judul
    let nyanya = nya.replace(/[bcdfghjklmnñpqrstvwxyzBCDEFGHJKLMNÑPQRSTVWXYZ]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^hint|pista$/i
handler.limit = true
export default handler
