var collect = [];

function tambahAgenda(agenda){
  collect.push(agenda);
}

function selanjutnyaApa(){
  return collect.shift();
}


function pentingBanget(agenda){
  collect.unshift(agenda);
}


tambahAgenda("Makan");
tambahAgenda("Minum");
console.log(collect);
selanjutnyaApa();
console.log(collect);
pentingBanget("Saman");
console.log(collect);
