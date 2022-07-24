// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 100000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah untuk di ewe'
  if (typeof db.data.users[who] == 'undefined') throw 'Dia lagi ga bisa ngewe karena belum ada di database bot'
  let __timers = (new Date - global.db.data.users[m.sender].lastewe)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastewe > 3600000){
  if (10000 > users[who].exp) throw 'Ga bisa di ewe ngab, dia lagi cape dan ga punya EXP\nmungkin dia lagi ga nafsu ngewe ama elu'
  users[who].exp -= dapat * 1
  users[m.sender].exp += dapat * 1
  global.db.data.users[m.sender].lastewe = new Date * 1
  conn.reply(m.chat, `wahhhhh iyahhh kimochi cussssruuttt...
selesai ngewe dan kamu mendapat ${dapat} EXP dari ewe eweanmu`, m)

}else conn.reply(m.chat, `Anda Sudah Ngewe Dan ngecrot, kelamin mu istirahat ${timers} untuk Ngewe lagi
`, m)
}
handler.help = ['ewe *@tag*']
handler.tags = ['rpg']
handler.command = /^(ewe|entot|entod|ngentot|perkosa|bokep|buatanak)$/
handler.limit = true
handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}