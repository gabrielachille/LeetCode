//7 kyu
//Count the number of vowels in the string

// function getVowelCount(str) {
//   let vowel = /[aeiou]/gi;
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(vowel)) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }

getVowelCount("Hello World");

function getVowelCount(str) {
  let count = 0;
  let vowel = /[aeiou]/gi;

  for (i = 0; i < str.length; i++) {
    if (str[i].match(vowel)) {
      count++;
    }
  }
  console.log(count);
  return count;
}
