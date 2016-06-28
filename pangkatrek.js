function pangkatan(angka,pangkat){
  if(pangkat == 0)

  return 1

  return angka * pangkatan(angka,pangkat - 1);
}

console.log(pangkatan(2,9999));
