// 4. Berapa jumlah karakter dalam string "1234567890"?
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan sebuah kalimat: ", (inputString)=> {
    console.log(`Jumlah Karakter: ${inputString.length}`);
    rl.close();
});