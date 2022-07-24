const timeout = 86400000
let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastngamen + 180000
  if (new Date - global.db.data.users[m.sender].lastngamen< 180000) throw `Anda sudah lelah untuk ngamen\nTunggu selama ${msToTime(time - new Date())} lagi`
	let moneynya = `${Math.floor(Math.random() *  45000)}`.trim()
	let expnya = `${Math.floor(Math.random() * 10000)}`.trim()
	let tempat = ['tanjung pinang', 'pantai🏖️', 'warung kopi ardi🏘️', 'DPR🏦', 'kebon🏡🌿', 'Monumen Perang Jagaraga🗿', 'Cafe Kyura☕', 'Rumah sisca kohlol🏫']
	let tempatnya = tempat[Math.floor(Math.random() * tempat.length)]
	let sonepek = ['jruinggggg', 'ngiiiiieekkkk', 'jreng jreng jreng', 'miu miu miu', 'suingggguengggg', ' jung jeng ajake jung jeng ajake jung jeng', 'jrung jrang suinggg', 'jreng jring', 'klunting kluntang']
	let sonepeknya = sonepek[Math.floor(Math.random() * sonepek.length)]
	let pesanemak = ['semangat ya nak ngamen nya biar bisa idupin keluarga dan menuhin inventory mu', 'kok keliatan murung, hasil ngamen mu dikit ya?', 'hebat kamu nak, bisa ngasilin duit', 'tabung ya uang nya, biar bisa beli pisi geming', 'kamu dah dapat rejeki, jangan lupa bersedekah ya kepada owner miko juga sedekah boleh', 'kamu terlihat senang, gimana hasil mulung nya']
	let pesanemaknya = pesanemak[Math.floor(Math.random() * pesanemak.length)]
	global.db.data.users[m.sender].money += moneynya * 1
	global.db.data.users[m.sender].exp += expnya * 1
	global.db.data.users[m.sender].lastngamen = new Date * 1
  m.reply(`*${sonepeknya}*🎸 !!!!!!!!!!, kamu selesai ngamen di *${tempatnya}*\nDan kamu mendapatkan : \n+${moneynya} Uang\n+${expnya} EXP\n\nPesan Emak : *${pesanemaknya}*`)
  setTimeout(() => {
					conn.reply(m.chat, `Ayuk ngamen lagi, tenagamu sudah pulih`, m)
					}, timeout)
}
handler.help = ['ngamen']
handler.tags = ['rpg']
handler.command = /^(ngamen)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

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

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}