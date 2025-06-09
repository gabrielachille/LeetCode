// take given string and return "(" for characters that only appear once
// and ")" for characters that appear multiple times
// case insensitive
//6kyu

function duplicateEncode(word) {
  word = word.toLowerCase().split("");
  return word
    .map((char, i, word) => {
      return word.indexOf(char) == word.lastIndexOf(char) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));

function duplicateEncode(word) {
  word = word.toLowerCase().split("");
  return word.map((x) => (x ? "(" : ")"));
}
