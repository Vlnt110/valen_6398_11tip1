// length
// Property ini mengembalikan jumlah karakter dalam string. Dalam bahasa JavaScript, string bersifat
// immutable (tidak dapat diubah), sehingga property length akan selalu mengembalikan panjang
// (jumlah karakter) dari string tersebut.
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