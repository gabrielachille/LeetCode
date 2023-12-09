//Return the sum of every number thats divisible by
//3 and 5 in a given number
//6 kyu

function solution(number) {
  let sum = 0;

  for (let i = 0; i < number + 1; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));
console.log(solution(23));
