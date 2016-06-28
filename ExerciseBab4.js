function range(bawah,atas,jarak){
  var array = []
  if(bawah >= atas){
    if(!(arguments[2])){
      jarak = - 1;
    }
    for(var i = bawah; i>= atas;i = i + jarak){
      array.push(i);
    }
  }
  else{
    if(!(arguments[2])){
      jarak =  1;
    }
    for(var i = bawah;i<= atas;i = i + jarak){
      array.push(i);
    }
  }
return array;
}

function sum(arrayMasuk){
  var temp = 0;
  for(var i = 0;i<arrayMasuk.length;i++){
    temp = temp + arrayMasuk[i];
  }
  return temp;
}

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55




function reverseArray(array){
  var temp = [];
  for(var i = array.length - 1; i>= 0;i--){
    temp.push(array[i]);
  }
  return temp;
}



// Your code here.

console.log(reverseArray(["A", "B", "C","D"]));
// → ["C", "B", "A"];
//var arrayValue = [1, 2, 3, 4, 5];
//reverseArrayInPlace(arrayValue);
//console.log(arrayValue);
// → [5, 4, 3, 2, 1]
