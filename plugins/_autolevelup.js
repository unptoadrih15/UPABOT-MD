import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 
	
let user = global.db.data.users[m.sender]
 if (!user.autolevelup) //throw `ππ πΌππππππππ ππππΌ πΏπππΌπΎππππΌπΏπ πππ *#on autolevelup* ππΌππΌ πΌπΎππππΌπ`
  return !0
let teks = `β¨ Bien hecho ! ${conn.getName(m.sender)}`
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
	  
m.reply(`
*β­βββ[ π¦π¨πππ¦π§π ππ π‘ππ©ππ ]βββββ¬£*
*β ${teks}*
*β                       [${before}] β [${user.level}]*
*ββββββββββββββββββ*
*β FECHA: ${new Date().toLocaleString('id-ID')}*
*β°βββγ π  ${wm} γββββββ¬£*

*_Cuanto mΓ‘s interactΓΊes con UpaBot-MD, mayor serΓ‘ tu nivel!!_*
`.trim())
    }
}		
//export const disabled = false 
