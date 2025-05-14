//write function that reverses every word with five
//or more characters in a string
//6kyu

// function spinWords(string) {
//   string = string.split(" ");

//   for (i = 0; i < string.length; i++) {
//     if (string[i].length >= 5) {
//       string[i] = string[i].split("").reverse().join("");
//     }
//   }

//   return string.join(" ");
// }

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));

function spinWords(string) {
  return string
    .split(" ")
    .map((x) => (x.length < 5 ? x : x.split("").reverse().join("")))
    .join(" ");
}
