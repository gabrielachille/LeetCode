// take given string and return "(" for characters that only appear once
// and ")" for characters that appear multiple times
// case insensitive

// function duplicateEncode(word) {
//   word = word.toLowerCase().split("");
//   return word
//     .map((char, i, word) => {
//       return word.indexOf(char) == word.lastIndexOf(char) ? "(" : ")";
//     })
//     .join("");
// }

console.log(duplicateEncode("recede"));

function duplicateEncode(word) {
  word = word.split("");
  return word.map((x) => (word.lastIndexOf(x) == word.indexf(x) ? "(" : ")"));
}
