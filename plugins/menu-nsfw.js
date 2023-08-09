const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'   
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪

┏━━━━━━━━━━━━━┓
┃ *<🔞𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 +18🔞/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔞 _${usedPrefix}pack_
┣ ඬ⃟🔞 _${usedPrefix}pack2_
┣ ඬ⃟🔞 _${usedPrefix}pack3_
┣ ඬ⃟🔞 _${usedPrefix}videox_
┣ ඬ⃟🔞 _${usedPrefix}tetas_
┣ ඬ⃟🔞 _${usedPrefix}booty_
┣ ඬ⃟🔞 _${usedPrefix}ecchi_
┣ ඬ⃟🔞 _${usedPrefix}furro_
┣ ඬ⃟🔞 _${usedPrefix}imagenlesbians_
┣ ඬ⃟🔞 _${usedPrefix}panties_
┣ ඬ⃟🔞 _${usedPrefix}pene_
┣ ඬ⃟🔞 _${usedPrefix}porno_
┣ ඬ⃟🔞 _${usedPrefix}porno2_
┣ ඬ⃟🔞 _${usedPrefix}randomxxx_
┣ ඬ⃟🔞 _${usedPrefix}pechos_
┣ ඬ⃟🔞 _${usedPrefix}yaoi_
┣ ඬ⃟🔞 _${usedPrefix}yaoi2_
┣ ඬ⃟🔞 _${usedPrefix}yuri_
┣ ඬ⃟🔞 _${usedPrefix}yuri2_
┣ ඬ⃟🔞 _${usedPrefix}trapito_
┣ ඬ⃟🔞 _${usedPrefix}hentai_
┣ ඬ⃟🔞 _${usedPrefix}pies_
┣ ඬ⃟🔞 _${usedPrefix}nsfwloli_
┣ ඬ⃟🔞 _${usedPrefix}nsfworgy_
┣ ඬ⃟🔞 _${usedPrefix}nsfwfoot_
┣ ඬ⃟🔞 _${usedPrefix}nsfwass_
┣ ඬ⃟🔞 _${usedPrefix}nsfwbdsm_
┣ ඬ⃟🔞 _${usedPrefix}nsfwcum_
┣ ඬ⃟🔞 _${usedPrefix}nsfwero_
┣ ඬ⃟🔞 _${usedPrefix}nsfwfemdom_
┣ ඬ⃟🔞 _${usedPrefix}nsfwglass_
┣ ඬ⃟🔞 _${usedPrefix}xnxxsearch_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧𝗔🗒️', '.menu'],
['🥵𝗖𝗥𝗘𝗔𝗗𝗢𝗥🥵', '.menu'],
['📮𝗗𝗢𝗡𝗔𝗥📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menunsfw|memunsfw|nsfw)$/i
handler.fail = null
handler.nsfw = true
handler.register = true
export default  handler
