function isValidWalk(walk) {
  let count = 0;
  if (walk.length !== 10) {
    return false;
  }

  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      count++;
    } else if (walk[i] === "s") {
      count--;
    } else if (walk[i] === "e") {
      count += 2;
    } else if (walk[i] === "w") {
      count -= 2;
    }
  }

  return count === 0 ? true : false;
}
