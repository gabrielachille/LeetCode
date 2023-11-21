//given string of numbers separated by a space
//return a string of the highest number and the lowest number

function highAndLow(num) {
  num = num.split(" ").map((x) => parseInt(x, 10));
  let high = Math.min(...num);
  let low = Math.max(...num);
  return `${high} ${low}`.toString();
}

console.log(highAndLow("1 2 3 4 5"));
