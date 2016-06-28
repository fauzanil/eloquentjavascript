function kali(yangdikali){
  return function(pengali){
    return yangdikali * pengali;
  }
}

satu = kali(2);
dua = satu(10);

console.log(dua);
