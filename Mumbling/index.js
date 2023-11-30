//You are given a string
//Output each character of the string the "index" number of
//times that it appears in the string followed by an
//"index-1" number of the same lowercase character

// function accum(s) {
//   num = "";
//   let str = s[0].toUpperCase();
//   for (let i = 1; i < s.length; i++) {
//     num += "-" + s[i].toUpperCase();
//     for (let j = 0; j < i; j++) {
//       num += s[i].toLowerCase();
//     }
//   }
//   return str + num;
// }

console.log(accum("abCdE"));

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
