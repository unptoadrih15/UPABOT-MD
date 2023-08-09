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
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦

┏━━━━━━━━━━━━━┓
┃ *<𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟⚒️ _${usedPrefix}tag *número*_
┣ ඬ⃟⚒️ _${usedPrefix}say *texto*_
┣ ඬ⃟⚒️ _${usedPrefix}tiempo *sitio*_
┣ ඬ⃟⚒️ _${usedPrefix}años *responder a foto*_
┣ ඬ⃟⚒️ _${usedPrefix}qmusicaes *responder audio/video*_
┣ ඬ⃟⚒️ _${usedPrefix}leerimagen *responder imagen*_
┣ ඬ⃟⚒️ _${usedPrefix}repetir *texto*_
┣ ඬ⃟⚒️ _${usedPrefix}repetir2 *texto*_
┣ ඬ⃟⚒️ _${usedPrefix}spamchat *texto*_
┣ ඬ⃟⚒️ _${usedPrefix}spamchat *numero*|*texto*|*n° de veces*_
┣ ඬ⃟⚒️ _${usedPrefix}traducir *texto*/ *responder mensaje*_
┣ ඬ⃟⚒️ _${usedPrefix}reaccionar *emoji* *responder mensaje*_
┣ ඬ⃟⚒️ _${usedPrefix}leermas *texto*|*texto*_
┣ ඬ⃟⚒️ _${usedPrefix}rdvo *responder a viewonce*_
┣ ඬ⃟⚒️ _${usedPrefix}fake *msg del bot* *@user* *msg fake*_
┣ ඬ⃟⚒️ _${usedPrefix}acortar *link*_
┣ ඬ⃟⚒️ _${usedPrefix}calc_
┣ ඬ⃟⚒️ _${usedPrefix}del *borrar mensaje del bot respondiendo*_
┣ ඬ⃟⚒️ _${usedPrefix}qrcode *texto*_
┣ ඬ⃟⚒️ _${usedPrefix}styletext *texto*_
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
handler.command = /^(menuherramientas|menuherra|memuherramientas|menuherramientas|menúherramientas)$/i
handler.fail = null
handler.register = true
export default  handler
