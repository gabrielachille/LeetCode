//detect if string is an isogram(every letter is unique)
// 7kyu

// function isIsogram(str) {
//   return str
//     .toLowerCase()
//     .split("")
//     .every((x, y, z) => z.indexOf(x) === z.lastIndexOf(x));
// }

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("moose")); // false

function isIsogram(str) {
  return str
    .toLowerCase()
    .split("")
    .every((x, y, z) => z.indexOf(x) === z.lastIndexOf(x));
}
