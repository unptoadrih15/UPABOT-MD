let handler  = async (m, { conn }) => {
 await conn.relayMessage(m.chat, { requestPaymentMessage: {
  noteMessage: { extendedTextMessage: { text: wm,
  currencyCodeIso4217: 'EUR',
  requestFrom: '0@s.whatsapp.net',
  expiryTimestamp: 8600,
  amount: 10000,
  background: './menu2.jpg'
}}}}, {})
}

handler.command = /^pay$/i
export default handler
