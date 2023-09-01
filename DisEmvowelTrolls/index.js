//Remove vowels from the string
//"Y" is not included
//7 kyu

function disemvowel(str) {
  let vowels = /[aeiouAEIOU]/gi;
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowels)) {
      str.splice(i, 1);
    }
  }
  return str;
}

disemvowel("This website is for losers LOL!");
