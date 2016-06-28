function cetakPeternakan(sapi,ayam){
  var cetakSapi = String(sapi);
  while(cetakSapi.length < 3){
    cetakSapi = "0" + cetakSapi;
  }
  console.log(cetakSapi + " Sapi");

  var cetakAyam = String(ayam);
  while(cetakAyam.length < 3){
    cetakAyam = "0" + cetakAyam;
  }
  console.log(cetakAyam + " Ayam");
}

cetakPeternakan(4,999);
