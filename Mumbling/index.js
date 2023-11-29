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
  s = s
    .split("")
    .map((num, x) => num.toUpperCase() + num.toLowerCase().repeat(x))
    .join("-");
  return s;
}
