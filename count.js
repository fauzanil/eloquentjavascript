// Your code here.

function countBs(x){
  var hasil = 0
  for(var i = 0;i<=x.length;i++){
    if(x.charAt(i) == "B"){
      hasil += 1;
    }
  }
return hasil
}

function countChar(x,y){
  var hasil = 0
  for(var i = 0;i<=x.length;i++){
    if(x.charAt(i) == y){
      hasil += 1;
    }
  }
return hasil
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
