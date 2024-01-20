//remove any instances of the number in the second array
//from the first array
//6kyu

// function arrayDiff(a, b) {
//   return a.filter((x) => !b.includes(x));
// }

console.log(arrayDiff([1, 2], [2]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}
