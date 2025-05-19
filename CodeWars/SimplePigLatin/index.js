//convert string to Pig Latin
//ignore punctuation
//5 kyu

function pigIt(str) {
  str = str
    .split(" ")
    .map((word) =>
      word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + "ay" : word
    )
    .join(" ");

  return str;
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));
