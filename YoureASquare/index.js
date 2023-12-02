//return true if given digit is a square number
//7kyu

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(26));
