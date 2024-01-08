function towerBuilder(nFloors) {
  for (let i = 0; i < nFloors.length; i++) {
    nFloors[i] = "*";
  }
  return nFloors[3];
}

console.log(towerBuilder(4));
