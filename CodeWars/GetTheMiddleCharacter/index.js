//return middle character/s of a word

function getMiddle(s) {
  return s.length % 2 == 1
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

console.log(getMiddle("riddle"));

console.log(getMiddle("testing"));
