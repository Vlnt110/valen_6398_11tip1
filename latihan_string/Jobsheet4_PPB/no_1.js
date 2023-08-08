// 1. Hitung panjang karakter dari kalimat berikut ini: "Budi adalah seorang siswa jurusan RPL yang
// tinggal didaerah Bekasi"
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (inputstring) => {
    // contoh properti length
    console.log(`panjang kalima: ${inputstring.length}`);
    rl.close();
});