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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦

*<𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦>*
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*

° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Bot callate_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Nico nico_
° ඬ⃟🔊 _Bruh_
° ඬ⃟🔊 _Contexto_
° ඬ⃟🔊 _Masivo_
° ඬ⃟🔊 _Fino señores_
° ඬ⃟🔊 _Entiendo_
° ඬ⃟🔊 _Raluka_
° ඬ⃟🔊 _Una pregunta_
° ඬ⃟🔊 _Yoshi_
° ඬ⃟🔊 _Linda noche_ (video)
° ඬ⃟🔊 _Linda chica_ (video)
° ඬ⃟🔊 _Te meto una ostia_
° ඬ⃟🔊 _Mami ven aqui_
° ඬ⃟🔊 _hola pinche putita_
° ඬ⃟🔊 _Te meto con la teta_
° ඬ⃟🔊 _Yo por ahi no paso_
° ඬ⃟🔊 _Todo bien todo correto_
° ඬ⃟🔊 _Bocadillo chorizo messi_
° ඬ⃟🔊 _Ankara messi_
° ඬ⃟🔊 _Me llaman romeo_
° ඬ⃟🔊 _Que no me tires cosas_
° ඬ⃟🔊 _Semen_
° ඬ⃟🔊 _Te pincho_
° ඬ⃟🔊 _Violin_
° ඬ⃟🔊 _buscando mikey_ (video)
° ඬ⃟🔊 _Mikey muerto_ (video)
° ඬ⃟🔊 _Cucacharra_
° ඬ⃟🔊 _tumadre_ (video)
° ඬ⃟🔊 _Sos puto_
`.trim()
conn.sendMessage(m.chat, { image: pp, caption: str.trim()})
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuaudio|menuaudios|memuaudios|memuaudio|audios)$/i
handler.fail = null
handler.register = true
export default  handler
