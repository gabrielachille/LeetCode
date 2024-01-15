//Move all the zeroes to the end of an array
//5kyu

function moveZeros(arr) {
  let nonzeroes = arr.filter((x) => x !== 0);
  let zeroes = arr.filter((x) => x === 0);
  return nonzeroes.concat(zeroes);
  //return [...nonzeroes, ...zeroes];
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// returns[false,1,1,2,1,3,"a",0,0]
