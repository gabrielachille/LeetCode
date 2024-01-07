function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 0; i < nFloors; i++) {
    arr[i] = arr[i - 1] + "*";
    // console.log(i);
  }
  return arr;
}

console.log(towerBuilder(4));
