//convert string to Pig Latin
//ignore punctuation
//5 kyu

function pigIt(str) {
  str = str
    .split(" ")
    .map((x) => (x.match(/[a-z]/i) ? x.slice(1) + x.charAt(0) + "ay" : x))
    .join(" ");

  //   return str.map((x) => x.match(punct) === false ?);
  return str;
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));
