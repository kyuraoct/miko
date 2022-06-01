let handler = async m => m.reply(`- Bang Ridwan - Pulsa
•  [0895-3303-79186]
•  [0896-5436-0447]

- Bang Kyura - Non Pulsa
•  Dana [0819-9890-3280]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
