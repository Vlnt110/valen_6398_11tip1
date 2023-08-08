// 2. Hitung panjang karakter dari kalimat berikut ini: "JavaScript is a powerful language."
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