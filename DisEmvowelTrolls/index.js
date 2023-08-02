//Remove vowels from the string
//"Y" is not included
//7 kyu

function disemvowel(str) {
  let vowels = /[aeiouAEIOU]/gi;
  str = str.split("");
  str.filter((x) => str.match(vowels));
  return str;
}
