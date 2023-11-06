//Remove vowels from the string
//"Y" is not included
//7 kyu

function disemvowel(str) {
  let vowels = /[aeiou]/gi;
  str = str.replace(vowels, "");
  return str;
}

disemvowel("This website is fur losers LOL!");

disemvowel("No offense but,\nYour writing is among the worst I've ever read");
