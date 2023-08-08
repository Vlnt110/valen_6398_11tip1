// 25. Dapatkan slice dari string "1234567890" mulai dari indeks 4 dengan panjang 4 karakter.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    rl.question("Masukan Index Pertama: ", (startIndex)=>{
        rl.question("Masukan Index terakhir: ", (endIndex)=>{
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            const sliceSubstring = kalimat.slice(startIndex,endIndex);
            console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${sliceSubstring}`);
            rl.close();
        });
    });
});