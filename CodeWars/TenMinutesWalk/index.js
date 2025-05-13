//each direction is one minute
//return true if the array is 10 minutes and
//gets you back to starting point
//return false if not

// function isValidWalk(walk) {
//   let count = 0;
//   if (walk.length !== 10) {
//     return false;
//   }

//   for (let i = 0; i < walk.length; i++) {
//     if (walk[i] === "n") {
//       count++;
//     } else if (walk[i] === "s") {
//       count--;
//     } else if (walk[i] === "e") {
//       count += 2;
//     } else if (walk[i] === "w") {
//       count -= 2;
//     }
//   }

//   return count === 0 ? true : false;
// }

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["n", "e", "n", "s", "e", "w", "n", "s", "w", "s"]));

function isValidWalk(walk) {
  let north = walk.filter((x) => x === "n").length;
  let south = walk.filter((x) => x === "s").length;
  let east = walk.filter((x) => x === "e").length;
  let west = walk.filter((x) => x === "w").length;

  return walk.length === 10 && north === south && east === west;
  // return south;
}
