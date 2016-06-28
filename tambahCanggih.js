var Jurnal = [
  {"events":["carrot","exercise","weekend"],"squirrel":false}]

function tambahCanggih(squirrel){
  data = {events : [], squirrel : squirrel}
  for(var i = 1;i<arguments.length;i++){
    data.events.push(arguments[i])
  }
  Jurnal.push(data);
}

tambahCanggih(true,"Makan","Minum","Beeng");

console.log(Jurnal);
