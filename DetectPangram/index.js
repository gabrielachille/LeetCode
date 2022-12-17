//Create function to detect is string uses every word
//in the alphabet
//ex "The quick brown fox jumps over the lazy dog"
//case insensitive

// function isPangram(string) {
//   let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
//   string = string.toLowerCase();
//   return alpha.every((x) => string.includes(x));
// }

isPangram("hello");
//false

isPangram("the quick brown fox jumps over the lazy dog");
//true

function isPangram(string) {
  string = string.toLowerCase();

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet.every((x) => string.includes(x));
}
