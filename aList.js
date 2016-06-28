var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

console.log(list);


function buatNode(valueMasuk){
  var node = {value : valueMasuk, rest : null}
  return node;
}

function arrayToList(array){
  for(var i = 0 ; i< array.length ; i++){
    
  }
}

console.log(arrayToList(["1","2"]));
