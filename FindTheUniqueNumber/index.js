//Every number in an array is the same exept for one
//Return the one that isn't

function findUniq(arr) {
  return arr.find((n) => indexOf(n) === arr.lastIndexOf(n));
}
