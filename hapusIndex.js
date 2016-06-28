function hapusIndex(array,indeks){
  return array.slice(0,indeks).concat(array.slice(indeks + 1));
}

ayam = ["1","2","3"]

console.log(hapusIndex(ayam,1));
