// function findOdd(A) {
//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A.length; j++) {
//       if (A[j] === A[i]) {
//         count++;
//       }
//     }
//     if (count % 2 === 1) {
//       return A[i];
//     }
//   }
// }

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

function findOdd(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
      }
    }
  }
}
