function findOutlier(integers) {
  let count = 0;
  for (let i = 0; i < integers.length; i++) {
    for (let j = 0; j < integers.length; j++) {
      if (integers[i] % 2 === 0) {
        count++;
      }
    }
    if (count > 1) {
      return "Odd";
    }
  }
}
