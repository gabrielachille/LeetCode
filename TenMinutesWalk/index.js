function isValidWalk(walk) {
  // directions = { n: 1, e: 1, w: -1, s: -1 };
  let count = 0;
  if (walk.length != 10) {
    return false;
  }

  for (let i = 0; i < walk.length; i++) {
    if (i === "n" || i === "e") {
      count++;
      console.log(count);
    } else if (i === "s" || i === "w") {
      count--;
      console.log(count);
    }
  }

  return count === 0 ? true : false;
}

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(
//   isValidWalk(["w", "s", "n", "e", "s", "e", "w", "n", "w", "e", "w", "e"])
// );
