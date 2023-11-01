function duplicateEncode(word) {
  // take given string and return "(" for characters that only appear once
  // and ")" for characters that appear multiple times
  //   word.map(char)=>
  word = word.toLowerCase();
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      word[i] == "(";
      console.log(word[i]);
    } else {
      word[i] == ")";
      console.log(word[i]);
    }
  }
}

duplicateEncode("recede");
