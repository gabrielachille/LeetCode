//Find the oulier of an odd and even number array with one number that isn't

function findOutlier(integers) {
  //if even #s is greater then 1 return the index of odd #
  //vice versa for odd #s
  //use filter
  let odd = integers.filter((e) => e % 2);
  let even = integers.filter((e) => e % 2 == 0);

  return odd.length == 1 ? odd[0] : even[0];
}

console.log(findOutlier([2, 2, 2, 2, 1]));
