//Remove vowels from the string
//"Y" is not included
//7 kyu

function disemvowel(str) {
  let vowels = /[aeiouAEIOU]/gi;
  str = str.split("");
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i].match(vowels)) {
      str.splice(i, 1);
    }
  }
  str = str.join("");
  console.log(str);
  return str;
}

disemvowel("This website is fur losers LOL!");

disemvowel("No offense but,\nYour writing is among the worst I've ever read");
