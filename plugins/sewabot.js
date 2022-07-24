let handler = async m => m.reply(`*- PENAWARAN HARGA SEWA + PENGGUNA PREMIUM -*

1. Join Grup > 30 Hari
IDR 15.000 

2. Premium > 30 Hari
IDR 10.000

3. Premium + Grup > 30 Hari
IDR 20.000

Pembayaran Boleh Menggunakan : 

1. DANA
2. ShopeePay
3. OVO
4. PULSA XL
5. GoPay

kalo minat segera hubungi owner

makasih.
`.trim()) // Tambah sendiri kalo
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^sewa$/i

module.exports = handler