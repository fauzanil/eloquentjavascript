

var pangkat = function(base,exponen){
  exponen.forEach(function(j){
    base *= base;
  })
  console.log(base);
}

pangkat(2,2);

function forEach(array,action){
  for(var i = 0; i< array.length ; i++){
    action(array[i])
  }
}
