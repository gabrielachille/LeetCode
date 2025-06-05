//In an array of all odd numbers except for one
//or all even numbers except for one, find the number that
//isn't like the others.

function findOutlier(integers) {
  let odd = integers.filter((x) => x % 2 !== 0);
  let even = integers.filter((x) => x % 2 === 0);

  return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
