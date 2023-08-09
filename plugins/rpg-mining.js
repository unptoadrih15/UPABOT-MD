import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, text, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let xtext = `*⛌ Ingrese un mineral de la lista que desea minar*

*Lista:*
\t∙ Estaño
\t∙ Cobre
\t∙ Hierro
\t∙ Sal
\t∙ Carbón
\t∙ Plata
\t∙ Carmesí
\t∙ Oro

*• Ejemplo:*
- ${usedPrefix + command} hierro

[ escriba tal como está ]`

  let user = global.db.data.users[m.sender]
  let min = user.pickaxe_bronze + user.pickaxe_iron + user.pickaxe_steel + user.pickaxe_crimsteel + user.pickaxe_mythan + user.pickaxe_cobalt + user.pickaxe_varaxite + user.pickaxe_magic + user.pickaxe_umbral + user.pickaxe_ancient
  let pick = user.pickaxe_equipped
  let tpick = (pick == 0 ? 'no tiene' : '' || pick == 1 ? 'bronce' : '' || pick == 2 ? 'hierro' : ''  || pick == 3 ? 'acero' : '' || pick == 4 ? 'carmesí' : '' || pick == 5 ? 'mythan' : '' || pick == 6 ? 'cobalto' : '' || pick == 7 ? 'varaxita' : '' || pick == 8 ? 'magica' : '' || pick == 9 ? 'umbral' : '' || pick == 10 ? 'ancient' : '')
  let pmax = 'Necesitas un mejor pico para extraer este mineral'
  if (min == 0) throw 'Necesitas un pico para extraer minerales'
  if (user.pickaxe_equipped == 0) throw 'Todavía no te has equipado ningún pico'
  if (!text) throw xtext
  let time = user.lastmiming + 37500 
  if (new Date - user.lastmiming < 37500) throw `Espera *${stime(time - new Date())}* para volver a minar` 

  let type = (args[0] || ' ').toLowerCase()

  switch (type) {
  case 'estaño':
  case 'tin':
    let tin = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp1 = tin * 10
    user.mineral_tin += tin * 1 
    user.mining_exp += exp1 * 1 
    let m1 = `
*Minaste 🏔️ mineral de estaño*

*Obtienes:*
◦ Estaño: ${tin}
◦ Exp: ${exp1}

*⛏️ Pico de:* ${tpick}
`.trim()
    await m.reply(m1)
    user.lastmiming = new Date * 1 
  break

  case 'cobre':
  case 'copper':
    let copper = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp2 = copper * 10
    user.mineral_copper += copper * 1 
    user.mining_exp += exp2 * 1 
    let m2 = `
*Minaste 🏔️ mineral de cobre*

*Obtienes:*
◦ Cobre: ${copper}
◦ Exp: ${exp2}

*⛏️ Pico de:* ${tpick}
`.trim()
    m.reply(m2)
    user.lastmiming = new Date * 1 
  break

  case 'hierro':
  case 'iron':
    let iron = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp3 = iron * 50
    user.mineral_iron += iron * 1 
    user.mining_exp += exp3 * 1 
    let m3 = `
*Minaste 🏔️ mineral de hierro*

*Obtienes:*
◦ Hierro: ${iron}
◦ Exp: ${exp3}

*⛏️ Pico de:* ${tpick}
`.trim()
    await m.reply(m3)
    user.lastmiming = new Date * 1 
  break

  case 'sal':
  case 'salt':
    if (user.mining_level < 10) throw 'Necesitas un nivel de minería de 10 para extraer este mineral'
    let salt = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp4 = salt * 80
    user.mineral_salt += salt * 1 
    user.mining_exp += exp4 * 1 
    let m4 = `
*Minaste 🏔️ mineral de sal*

*Obtienes:*
◦ Sal: ${salt}
◦ Exp: ${exp4}

*⛏️ Pico de:* ${tpick}
`.trim()
    await m.reply(m4)
    user.lastmiming = new Date * 1 
  break

  case 'carbón':
  case 'coal':
    if (user.mining_level < 20) throw 'Necesitas un nivel de minería de 20 para extraer este mineral'
    let coal = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp5 = coal * 115
    user.mineral_coal += coal * 1 
    user.mining_exp += exp5 * 1 
    let m5 = `
*Minaste 🏔️ mineral de carbón*

*Obtienes:*
◦ Carbón: ${coal}
◦ Exp: ${exp5}

*⛏️ Pico de:* ${tpick}
`.trim()
    m.reply(m5)
    user.lastmiming = new Date * 1 
  break

  case 'plata':
  case 'silver':
    if (user.mining_level < 25) throw 'Necesitas un nivel de minería de 25 para extraer este mineral'
    let silver = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp6 = silver * 135
    user.mineral_silver += silver * 1 
    user.mining_exp += exp6 * 1 
    let m6 = `
*Minaste 🏔️ mineral de plata*

*Obtienes:*
◦ plata: ${silver}
◦ Exp: ${exp6}

*⛏️ Pico de:* ${tpick}
`.trim()
    await m.reply(m6)
    user.lastmiming = new Date * 1 
  break

  case 'carmesí':
  case 'crimsteel':
    if (user.mining_level < 30) throw 'Necesitas un nivel de minería de 30 para extraer este mineral'
    let crimsteel = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp7 = crimsteel * 350
    user.mineral_crimsteel += crimsteel * 1 
    user.mining_exp += exp7 * 1 
    let m7 = `
*Minaste 🏔️ mineral de carmesí*

*Obtienes:*
◦ Carmesí: ${crimsteel}
◦ Exp: ${exp7}

*⛏️ Pico de:* ${tpick}
`.trim()
    await m.reply(m7)
    user.lastmiming = new Date * 1 
  break

  case 'oro':
  case 'gold':
    if (user.mining_level < 40) throw 'Necesitas un nivel de minería de 40 para extraer este mineral'
    let gold = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp8 = gold * 400
    user.mineral_gold += gold * 1 
    user.mining_exp += exp8 * 1 
    let m8 = `
*Minaste 🏔️ mineral de oro*

*Obtienes:*
◦ Oro: ${gold}
◦ Exp: ${exp8}

*⛏️ Pico de:* ${tpick}
`.trim()
    await m.reply(m8)
    user.lastmiming = new Date * 1 
  break

  case 'sal rosa':
  case 'pink salt':
    if (user.mining_level < 45) throw 'Necesitas un nivel de minería de 45 para extraer este mineral'
    let pink_salt = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp9 = pink_salt * 500
    user.mineral_pink_salt += pink_salt * 1 
    user.mining_exp += exp9 * 1 
    let m9 = `
*Minaste 🏔️ mineral de sal rosa*

*Obtienes:*
◦ Sal rosa: ${pink_salt}
◦ Exp: ${exp9}

*⛏️ Pico de:* ${tpick}
`.trim()
    await m.reply(m9)
    user.lastmiming = new Date * 1 
  break
  }


  let before = user.mining_level * 1
  while (canLevelUp(user.mining_level, user.mining_exp, global.multiplier)) user.mining_level++
  if (before !== user.mining_level) {
  m.reply(`*⛏️ Subiste el nivel ${before} -> ${user.mining_level} de minería 🎊*`)
  }

}

handler.help = ['minar']
handler.tags = ['rpg']
handler.command = /^(minar|mining|mine|picar)$/i

export default handler