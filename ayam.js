function ayam(){
  return telur()
};

function telur(){
  return ayam()
};

console.log("Yang duluan adalah" + ayam());
