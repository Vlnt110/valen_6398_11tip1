// 31. Ubah kalimat "Data Analyst merupakan pekerjaan yang dibutuhkan beberapa perusahaan"
// menjadi huruf besar (uppercase).
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
})