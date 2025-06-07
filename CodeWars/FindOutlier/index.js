//In an odd or even numberarray
//find the number that is the other
//6kyu

function findOutlier(integers) {
  //if even #s is greater then 1 return the index of odd #
  //vice versa for odd #s
  //use filter
  let odd = integers.filter((e) => e % 2 === 1);
  let even = integers.filter((e) => e % 2 === 0);

  return odd.length == 1 ? odd[0] : even[0];
}

console.log(findOutlier([2, 2, 2, 2, 1]));
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
