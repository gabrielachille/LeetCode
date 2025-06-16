//Build a pyramid-shaped tower with n number of floors
//
//6kyu

function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 0; i < nFloors; i++) {
    arr[i] = "*".repeat(i);
  }
  return arr;
}

console.log(towerBuilder(4));
