
function forEach(array,action){
  for(var i = 0; i< array.length ; i++){
    action(array[i])
  }
}

var ar = ["1","2","3","4"];

forEach(ar,console.log);


var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers,function(number){
  sum += number;
})

console.log(sum);


var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers,function(number){
  sum -= number;
})

console.log(sum);

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}


function gatherCorrelations(journal) {
  var phis = {};
  journal.forEach(function(entry) {
    entry.events.forEach(function(event) {
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}
