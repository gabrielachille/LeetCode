function duplicateEncode(word) {
  // take given string and return "(" for characters that only appear once
  // and ")" for characters that appear multiple times
  word = word.toLowerCase();
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    // figure out the last character egdecase
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      word[i] = "(";
    } else {
      word[i] = ")";
    }
  }
  console.log(word);
}

duplicateEncode("recede");

//   word.map(char)=>
