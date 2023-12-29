//Return a new string where every unique character is "("
//and every repeated character is ")"
//case is ignored
//6kyu

function findUnique(arr) {
  let newArr = [];
  arr = arr.toLowerCase();
}

console.log(findUnique("din"));
console.log(findUnique("recede"));
console.log(findUnique("Success"));

// function findUnique(arr) {
//   return arr.find((n) => indexOf(n) === arr.lastIndexOf(n));
// }
