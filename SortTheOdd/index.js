//remove odd numbers from an array and sort them from low to high
//put the odd numbers back at original positions in array
//while keeping the even numbers the same
//6kyu

// function sortArray(array) {
//   let odd = array.filter((x) => x % 2 === 1).sort((a, b) => a - b);

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       array[i] = odd.shift();
//     }
//   }
//   return array;
// }

console.log(sortArray([7, 1]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));

function sortArray(arr) {
  let odd = arr.filter((x) => x % 2 === 1).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      arr[i] = odd.shift();
    }
  }
  return arr;
}
