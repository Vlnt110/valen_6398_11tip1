// 3. Berapa karakterkah dalam kata "Ibu Kota Negara"?
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan sebuah kalimat: ", (inputString)=> {
    console.log(`Jumlah Karakter: ${inputString.length}`);
    rl.close();
});