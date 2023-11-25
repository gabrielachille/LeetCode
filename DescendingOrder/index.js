//take integer and rearrange from highest to lowest
//7 kyu

// function descendingOrder(n) {
//   n = n
//     .toString()
//     .split("")
//     .sort((x, y) => y - x)
//     .join("");
//   return +n;
// }

console.log(descendingOrder(145263));

function descendingOrder(num) {
  return num.toString().split("").sort().reverse().join("");
}
