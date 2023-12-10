function arrayDiff(a, b) {
  return a.foreach((x) =>
    x.indexOf(b[0]) === x.lastIndexOf(b[0]) ? a.pop(x) : 0
  );
}

console.log(arrayDiff([1, 2], [2]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
