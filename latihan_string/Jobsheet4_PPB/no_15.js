// 15. Dimana posisi kata "jurusan" pertama kali muncul dalam kalimat "Banu merupakan seorang
// murid di sekolah SMK di Jakarta dan jurusan dia adalah RPL"?
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    rl.question("Masukan Kata yang ingin dicari: ", (kataCari)=>{
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`kata ${kataCari}' pertama kali muncul pada indeks ${indeksKata}`);
        } else {
            console.log(`kata ${kataCari}' tidak ditemukan pada kalimat`);
        }
        rl.close()
    })
})