const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗧𝗢𝗣𝗦/𝗝𝗨𝗘𝗚𝗢𝗦 💖彡*

┏━━━━━━━━━━━━━┓
┃ *<𝗠𝗘𝗡𝗨 𝗧𝗢𝗣𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🎖️ _${usedPrefix}top *texto*_
┣ ඬ⃟🎖️ _${usedPrefix}topgays_
┣ ඬ⃟🎖️ _${usedPrefix}topguap@s_
┣ ඬ⃟🎖️ _${usedPrefix}topput@s_
┣ ඬ⃟🎖️ _${usedPrefix}toppajer@s_
┣ ඬ⃟🎖️ _${usedPrefix}topotakus_
┣ ඬ⃟🎖️ _${usedPrefix}topfe@s_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🕹 _${usedPrefix}math *modo*_
┣ ඬ⃟🎮 _${usedPrefix}ttt *nombre del la sala*_
┣ ඬ⃟🕹 _${usedPrefix}delttt *nombre del la sala*_
┣ ඬ⃟🎮 _${usedPrefix}multijuegos_
┣ ඬ⃟🕹️ _${usedPrefix}random *texto*_
┣ ඬ⃟🎮 _${usedPrefix}minovio *@tag*_
┣ ඬ⃟🕹️ _${usedPrefix}2gay *@tag*_
┣ ඬ⃟🎮 _${usedPrefix}gay *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}lesbi *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}pajer@ *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}put@ *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}rata *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}manc@ *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}prostitut@ *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}follar *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}pfollar *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}ship(random)_
┣ ඬ⃟🕹️ _${usedPrefix}ship *@tag* *@tag*_
┣ ඬ⃟🎮 _${usedPrefix}bot *texto*_
┣ ඬ⃟🕹️ _${usedPrefix}love *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}slot *(apuesta de xp)*_
┣ ඬ⃟🕹 _${usedPrefix}ppt *piedra / papel / tijera*_
┣ ඬ⃟🎮 _${usedPrefix}ñengo *suit @user*_ (ppt PvP)
┣ ඬ⃟🕹️ _${usedPrefix}cancion *adivinar cancion*_
┣ ඬ⃟🎮 _${usedPrefix}ñengo *adivinar cancion de ñengo*_
┣ ඬ⃟🕹️ _${usedPrefix}pista *pista del nombre de la canción*_
┣ ඬ⃟🎮 _${usedPrefix}acertijo_
┣ ඬ⃟🕹️ _${usedPrefix}zodiac *AAAA MM DD*_
┣ ඬ⃟🕹️ _${usedPrefix}cuando *texto*_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧𝗔🗒️', '.menu'],
['🥵𝗖𝗥𝗘𝗔𝗗𝗢𝗥🥵', '.creador'],
['📮𝗗𝗢𝗡𝗔𝗥📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menujuegos|menutops)$/i
handler.fail = null
handler.register = true
export default  handler
