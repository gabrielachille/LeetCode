//separate every digit, square them, and then put them back together
//and return it as a number

function squareDigits(num) {
  num = num
    .toString()
    .split("")
    .map((x) => x * x)
    .join("")
    .toString(2);
  return +num;
}

console.log(squareDigits(345));
