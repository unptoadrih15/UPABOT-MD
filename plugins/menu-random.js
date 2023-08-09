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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠

┏━━━━━━━━━━━━━┓
┃ *<RANDOM/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👾 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟👾 _${usedPrefix}messi_
┣ ඬ⃟👾 _${usedPrefix}meme_
┣ ඬ⃟👾 _${usedPrefix}itzy_
┣ ඬ⃟👾 _${usedPrefix}blackpink_
┣ ඬ⃟👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ඬ⃟👾 _${usedPrefix}lolivid_
┣ ඬ⃟👾 _${usedPrefix}loli_
┣ ඬ⃟👾 _${usedPrefix}navidad_
┣ ඬ⃟👾 _${usedPrefix}ppcouple_
┣ ඬ⃟👾 _${usedPrefix}neko_
┣ ඬ⃟👾 _${usedPrefix}waifu_
┣ ඬ⃟👾 _${usedPrefix}akira_
┣ ඬ⃟👾 _${usedPrefix}akiyama_
┣ ඬ⃟👾 _${usedPrefix}anna_
┣ ඬ⃟👾 _${usedPrefix}asuna_
┣ ඬ⃟👾 _${usedPrefix}ayuzawa_
┣ ඬ⃟👾 _${usedPrefix}boruto_
┣ ඬ⃟👾 _${usedPrefix}chiho_
┣ ඬ⃟👾 _${usedPrefix}chitoge_
┣ ඬ⃟👾 _${usedPrefix}deidara_
┣ ඬ⃟👾 _${usedPrefix}erza_
┣ ඬ⃟👾 _${usedPrefix}elaina_
┣ ඬ⃟👾 _${usedPrefix}eba_
┣ ඬ⃟👾 _${usedPrefix}emilia_
┣ ඬ⃟👾 _${usedPrefix}hestia_
┣ ඬ⃟👾 _${usedPrefix}hinata_
┣ ඬ⃟👾 _${usedPrefix}inori_
┣ ඬ⃟👾 _${usedPrefix}isuzu_
┣ ඬ⃟👾 _${usedPrefix}itachi_
┣ ඬ⃟👾 _${usedPrefix}itori_
┣ ඬ⃟👾 _${usedPrefix}kaga_
┣ ඬ⃟👾 _${usedPrefix}kagura_
┣ ඬ⃟👾 _${usedPrefix}kaori_
┣ ඬ⃟👾 _${usedPrefix}keneki_
┣ ඬ⃟👾 _${usedPrefix}kotori_
┣ ඬ⃟👾 _${usedPrefix}kurumi_
┣ ඬ⃟👾 _${usedPrefix}madara_
┣ ඬ⃟👾 _${usedPrefix}mikasa_
┣ ඬ⃟👾 _${usedPrefix}miku_
┣ ඬ⃟👾 _${usedPrefix}minato_
┣ ඬ⃟👾 _${usedPrefix}naruto_
┣ ඬ⃟👾 _${usedPrefix}nezuko_
┣ ඬ⃟👾 _${usedPrefix}sagiri_
┣ ඬ⃟👾 _${usedPrefix}sasuke_
┣ ඬ⃟👾 _${usedPrefix}sakura_
┣ ඬ⃟👾 _${usedPrefix}cosplay_
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
handler.command = /^(menurandom|menurndm|memurandom)$/i
handler.fail = null
handler.register = true
export default  handler
