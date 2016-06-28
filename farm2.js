function tambahNol(jumlah,batas){
// ini buat nambahin nol nya
var stringJumlah = String(jumlah);
while(stringJumlah.length < batas){
  stringJumlah = "0" + stringJumlah;
}
return stringJumlah;
}


function peternakan(sapi,ayam,babi){
  console.log(tambahNol(sapi,3) + " Sapi");
  console.log(tambahNol(ayam,3) + " Ayam");
  console.log(tambahNol(babi,3) + " Babi");
}

peternakan(4,5,6);
