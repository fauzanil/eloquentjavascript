function wrapValue(n){
//  variabellokal = n;
  return function(){
    return n;
  }
}

satu = wrapValue(1);
dua = wrapValue(2);

console.log(dua());
console.log(wrapValue(4)());
