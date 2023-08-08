
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat pertama: ", (kalimat1) => {
    rl.question("masukan  kalimat kedua: ", (kalimat2) => {
        // mengunakan kalimat1 dan kalimat2 mengunakan mathod mathid concad
        const kalimatgabungan = kalimat1.concat(kalimat2);
        console.log(`hasil penggabungan: ${kalimatgabungan}`);
        rl.close();
    });
});