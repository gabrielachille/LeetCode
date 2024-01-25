//convert binary array to number digit
//7kyu

// const binaryArrayToNumber = (arr) => {
//   return parseInt(arr.join(""), 2);
// };

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 0, 0, 1]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));

function binaryArrayToNumber(arr) {
  arr = arr.join("");
}
