function power(base,pangkat){
  if(pangkat == undefined){
    pangkat = 2;
  }
    var total = 1;
    for(var j = 1 ;j<=pangkat;j++){
      total *= base;

  }
return total;
}

console.log(power(4));
console.log(power(2,10));
