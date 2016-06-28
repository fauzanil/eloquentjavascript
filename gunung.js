var landscape = function(){
var combine = ""

var lembah = function(x){
  for(var i = 1;i<=x;i++){
    combine+="_";
  }

};

var gunung = function(x){
  combine+="/"
  for(var i = 1; i<= x;i++){
    combine+="'"
  }
  combine+="\\"

}
lembah(3);
gunung(4);
lembah(6);
gunung(1);
lembah(1);
return(combine);
};

console.log(landscape());
