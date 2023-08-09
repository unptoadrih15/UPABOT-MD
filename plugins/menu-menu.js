import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    
try {
let str = `
*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 : ${rtotalreg}*

╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║═ *𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍𝕭𝖔𝖙*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Creador del Bot: 𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍15* 
║➤ *N° del creador:* wa.me/34642467703 (No bot) 
║➤ *Me apoyarias mucho con una donacion a seguir desarrollando el bot*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *<INFORMACIÓN|MENUS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️️ _${usedPrefix}estado_
┣ ඬ⃟ℹ️️ _${usedPrefix}infobot_
┣ ඬ⃟ℹ️️ _${usedPrefix}donar_
┣ ඬ⃟ℹ️️ _${usedPrefix}grouplist_
┣ ඬ⃟ℹ️️ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<NUMERO DEL CREADOR/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👻 _${usedPrefix}creador_
┣━━━━━━━━━━━━━
┃ *<UNE UN BOT A TU GRUPO/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🤖 _${usedPrefix}join *link del grupo*_ 
┣ Añade al creador al grupo y dale admin
┣ *<REPORTE DE FALLOS />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ඬ⃟🔰 _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗧𝗢𝗣𝗦/>*
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
┃ *<𝗝𝗨𝗘𝗚𝗢𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🕹 _${usedPrefix}math *modo*_
┣ ඬ⃟🎮 _${usedPrefix}ttt *nombre del la sala*_
┣ ඬ⃟🕹 _${usedPrefix}delttt *nombre del la sala*_
┣ ඬ⃟🎮 _${usedPrefix}random_
┣ ඬ⃟🕹️ _${usedPrefix}2gay *@tag*_
┣ ඬ⃟🎮 _${usedPrefix}gay *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}lesbi *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}pajer@ *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}put@ *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}rata *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}manc@ *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}prostitut@ *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}follar *@tag / nombre*_
┣ ඬ⃟🕹️ _${usedPrefix}pfollar *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}ship_
┣ ඬ⃟🎮 _${usedPrefix}bot *texto*_
┣ ඬ⃟🎮 _${usedPrefix}love *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}slot *(apuesta de xp)*_
┣ ඬ⃟🕹 _${usedPrefix}ppt *piedra / papel / tijera*_
┣ ඬ⃟🎮 _${usedPrefix}cancion *adivinar cancion*_
┣ ඬ⃟🕹️ _${usedPrefix}ñengo *adivinar cancion de ñengo*_
┣ ඬ⃟🎮 _${usedPrefix}pista *pista del nombre de la canción*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📥 _${usedPrefix}facebook *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}play1 *<texto / enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}play2 *<texto / enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}play *<texto>*_
┣ ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
┣ ඬ⃟📥 _${usedPrefix}pinteret *<texto>*_
┣ ඬ⃟📥 _${usedPrefix}wallpaper *<texto>*_
┣ ඬ⃟📥 _${usedPrefix}wallpaper2 *<texto>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗚𝗥𝗨𝗣𝗢𝗦>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💎 _${usedPrefix}admins_
┣ ඬ⃟💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
┣ ඬ⃟💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
┣ ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟💎 _${usedPrefix}grupo abrir/cerrar_
┣ ඬ⃟💎 _${usedPrefix}banchat/unbanchat_
┣ ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟💎 _${usedPrefix}infogroup_
┣ ඬ⃟💎 _${usedPrefix}link_
┣ ඬ⃟💎 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟💎 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_
┣ ඬ⃟💎 _${usedPrefix}del *responder al mensaje del bot para borrarlo*_
┣ ඬ⃟💎 _${usedPrefix}setpp *establecer foto como perfil del grupo*_
┣ ඬ⃟💎 _${usedPrefix}simular *<welcome / bye / promote / demote>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥𝗘𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🧧 _${usedPrefix}toimg *<responde a un sticker>*_
┣ ඬ⃟🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
┣ ඬ⃟🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
┣ ඬ⃟🧧 _${usedPrefix}tovideo *<responde a un audio>*_
┣ ඬ⃟🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
┣ ඬ⃟🧧 _${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗟𝗢𝗚𝗢𝗦/>*
┃≡≡≡≡≡≡1${usedPrefix}pixelar_
┣ ඬ⃟🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<RANDOM/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👾 _${usedPrefix}menurandom_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<🔞COMANDOS +18🔞/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 𝗘𝗦𝗧𝗘 𝗠𝗢𝗗𝗢 𝗗𝗘𝗕𝗘𝗡 𝗦𝗘𝗥 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗣𝗢𝗥 𝗔𝗗𝗠𝗜𝗡𝗦 𝗨𝗦𝗔𝗡𝗗𝗢: *.on modohorny*
┣ 𝗬 𝗟𝗨𝗘𝗚𝗢 𝗣𝗜𝗗𝗘 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗨𝗦𝗔𝗡𝗗𝗢 .menunsfw
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢/>*
┃     *- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🎤 _${usedPrefix}bass_
┣ ඬ⃟🎤 _${usedPrefix}blown_
┣ ඬ⃟🎤 _${usedPrefix}deep_
┣ ඬ⃟🎤 _${usedPrefix}earrape_
┣ ඬ⃟🎤 _${usedPrefix}fast_
┣ ඬ⃟🎤 _${usedPrefix}fat_
┣ ඬ⃟🎤 _${usedPrefix}nightcore_
┣ ඬ⃟🎤 _${usedPrefix}reverse_
┣ ඬ⃟🎤 _${usedPrefix}robot_
┣ ඬ⃟🎤 _${usedPrefix}slow_
┣ ඬ⃟🎤 _${usedPrefix}smooth_
┣ ඬ⃟🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗖𝗛𝗔𝗧 𝗔𝗡𝗢𝗡𝗜𝗠𝗢/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📳 _${usedPrefix}start_
┣ ඬ⃟📳 _${usedPrefix}next_
┣ ඬ⃟📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}google *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}imagen *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟🔍 _${usedPrefix}igstalk *<nombre de usuario>*_
┣ ඬ⃟🔍 _${usedPrefix}tiktokstalk *<nombre de usuario>*_
┣ ඬ⃟🔍 _${usedPrefix}pptiktok *<nombre de usuario>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
┣ ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
┣ ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
┣ ඬ⃟🛠️ _${usedPrefix}subirestado *<texto / responder a un archivo multimedia>*_
┣ ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_
┗━━━━━━━━━━━━━┛
*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*

° ඬ⃟💵 _${usedPrefix}balance_
° ඬ⃟💵 _${usedPrefix}claim_
° ඬ⃟💵 _${usedPrefix}top_
° ඬ⃟💵 _${usedPrefix}levelup_
° ඬ⃟💵 _${usedPrefix}myns_
° ඬ⃟💵 _${usedPrefix}perfil_
° ඬ⃟💵 _${usedPrefix}work_
° ඬ⃟💵 _${usedPrefix}minar_
° ඬ⃟💵 _${usedPrefix}buy_
° ඬ⃟💵 _${usedPrefix}buyall_
° ඬ⃟💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 _${usedPrefix}verificar_
° ඬ⃟💵 _${usedPrefix}unreg *<numero de serie>*_
┏━━━━━━━━━━━━━┓
┃ *<𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👽 _${usedPrefix}s
┣ ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟👽 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟👽 _${usedPrefix}ttp *<texto>*_
┣ ඬ⃟👽 _${usedPrefix}ttpg *<texto>*_
┣ ඬ⃟👽 _${usedPrefix}attpg *<texto>*_
┣ ඬ⃟👽 _${usedPrefix}attpg2 *<texto>*_
┣ ඬ⃟👽 _${usedPrefix}pat *<@tag>_
┣ ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
┣ ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
┣ ඬ⃟👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<ACTIVAR/DESACTIVAR/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟☑️ _${usedPrefix}on/off *welcome*_
┣ ඬ⃟☑️ _${usedPrefix}on/off *modohorny*_
┣ ඬ⃟☑️ _${usedPrefix}on/off *antilink*_
┣ ඬ⃟☑️ _${usedPrefix}on/off *antilink2*_
┣ ඬ⃟☑️ _${usedPrefix}on/off *detect*_
┣ ඬ⃟☑️ _${usedPrefix}on/off *audios*_
┣ ඬ⃟☑️ _${usedPrefix}on/off *autosticker*_
┣ ඬ⃟☑️ _${usedPrefix}on/off *antisticker*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<COMANDOS CREADOR/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👑 _${usedPrefix}cajafuerte_
┣ ඬ⃟👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟👑 _${usedPrefix}disable *restrict*_
┣ ඬ⃟👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟👑 _${usedPrefix}disable *autoread*_
┣ ඬ⃟👑 _${usedPrefix}enable *public*_
┣ ඬ⃟👑 _${usedPrefix}disable *public*_
┣ ඬ⃟👑 _${usedPrefix}enable *pconly*_
┣ ඬ⃟👑 _${usedPrefix}disable *pconly*_
┣ ඬ⃟👑 _${usedPrefix}enable *gconly*_
┣ ඬ⃟👑 _${usedPrefix}disable *gconly*_
┣ ඬ⃟👑 _${usedPrefix}banchat2_
┣ ඬ⃟👑 _${usedPrefix}unbanchat2_
┣ ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
┣ ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟👑 _${usedPrefix}bc *<texto>*_
┣ ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
┣ ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
┣ ඬ⃟👑 _${usedPrefix}cleartpm_
┣ ඬ⃟👑 _${usedPrefix}restart_
┣ ඬ⃟👑 _${usedPrefix}update_
┣ ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
┣ ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
┣ ඬ⃟👑 _${usedPrefix}listprem_
┣ ඬ⃟👑 _${usedPrefix}añadirdiamantes *<@tag> <cantidad>*_
┣ ඬ⃟👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┣ ඬ⃟👑 _${usedPrefix}resetuser_
┗━━━━━━━━━━━━━┛
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: {url: pp}, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: {url: pp}, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
}
} catch (e) {
console.log(e)
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50
handler.register = true
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}