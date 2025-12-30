import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import * as cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import { en, es, id, ar, pt, fr } from './lib/idiomas/total-idiomas.js' 


//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰  

global.owner = [
  ['34642467703', 'Unptoadrih15', true],
]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = ['34642467703'] 
//key de violetics
global.Key360 = ['964f-0c75-7afc']
   
  
//⊱ ━━━━━.⋅ IDIOMA : LENGUAJE ⋅.━━━━ ⊰ 
//Agrega el Idioma que quieres que tenga UpaBot-MD
//Add the language you want UpaBot-MD to have
//  es = Español         id = Bahasa Indonesia
//  en = English         pt = Português 
//  ar = عرب  

global.lenguajeGB = es  //Idioma de  UpaBot, Ejemplo: es | en | pt...

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.openai_key = 'sk-...OzYy'
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW'
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'GataDios'
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.official = [ // Agregate si eres Owner
['34642467703', 'unptoadrih15', 1], 
] 

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪🇨

global.packname = '𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍15'
global.author = '𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍15'

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = '1.4.9'
global.vsJB = '2.0'

global.gt = '𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍15'
global.yt = ''
global.yt2 = ''
global.ig = 'https://www.instagram.com/unptoadrih15'
global.md = ''
global.fb = ''

global.nna = '' //UPDATE
global.nna2 = '' //Help
global.nn = '' //Grupo 1
global.nnn = '' //Grupo 2
global.nnnt = '' //Grupo 3
global.nnntt = '' //Grupo 4
global.nnnttt = '' //Grupo 5
global.nnnttt1 = '' //Grupo 6 COL
global.nnnttt2 = '' //Grupo 7 COL
global.nnnttt3 = '' //Grupo 8 COL
global.nnnttt4 = '' //Grupo 9 COL
global.paypal = 'https://paypal.me/unptoadrih15'
global.asistencia = 'Wa.me/34642467703' //Dudas? escríbeme...

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = '𝖀𝖕𝖆𝕭𝖔𝖙-𝕸𝕯'
global.igfg = '𝖀𝖕𝖆𝕭𝖔𝖙-𝕸𝕯'
global.wait = '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'
global.nomorown = '34642467703'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 

// Sticker WM
global.packname = ''
global.author = '𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍𝕭𝖔𝖙'

global.wm = '𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍𝕭𝖔𝖙'
global.igfg = '𝖀𝖓𝕻𝖙𝖔𝕬𝖉𝖗𝖎𝖍𝕭𝖔𝖙'
global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'

global.imagen1 = fs.readFileSync('./Menu2.jpg')

global.multiplier = 70 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊 Nivel/',
      limit: '💎 Limite/',
      health: '❤️ Salud/',
      exp: '✨ Experiencia/',
      money: '🪙 Dinero/',
      potion: '🥤 Poción/',
      diamond: '💎 Diamante/',
      common: '📦 Caja comun/',
      uncommon: '🛍️ Caja poco comun/',
      mythic: '🎁 Caja mítica/',
      legendary: '🗃️ Caja legendaria/',
      pet: '🐕 Macota/',
      gold: '🏅 Oro/',
      trash: '🗑 Basura/',
      armor: '🥼 Armadura/',
      sword: '⚔️ Espada/',
      pickaxe: '⛏️ Pico/',
      fishingrod: '🎣 Caña/',
      wood: '🪵 Madera/',
      rock: '🪨 Piedra/',
      string: '🕸️ Cuerda/',
      horse: '🐴 Caballo/',
      cat: '🐱 Gato/',
      dog: '🐶 Perro/',
      fox: '🦊 Zorro/',
      petFood: '🍖 Comida de mascota/',
      iron: '⛓️ Hierro/',
      emerald: '❇️ Esmeralda/',
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
