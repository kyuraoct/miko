let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/trap')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'sambil coli ya, ati ati hormon dopamin lu kebanyakan', m)
}
handler.help = ['trap', 'jebakan']
handler.tags = ['nsfw']
handler.command = /^(trap|jebakan)$/i
handler.premium = false
handler.owner = false
handler.limit = true

module.exports = handler