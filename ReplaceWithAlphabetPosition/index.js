// loop through string
// use charCodeAt to turn letters into unicode number
// ignore anything that isn't a number
// Account for Lowercase/Uppercase
// add numbers to empty array
// join numbers with a space

function alphabetPosition(text) {
  text = text.toLowerCase();
  console.log(text);
  let unicodeArr = [];
  let alphabet = /[A-Za-z]/;
  for (let i = 0; i < text.length; i++) {
    if (alphabet.test(text[i])) {
      unicodeArr.push(text[i].charCodeAt());
    }
  }
  unicodeArr = unicodeArr.map((x) => x - 78);
  return unicodeArr.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");
