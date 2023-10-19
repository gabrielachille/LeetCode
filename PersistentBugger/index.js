//multiply number until it's a single digit

count = 0;
function persistence(num) {
  let numstring = [];
  numstring = num.toString().split("");
  if (numstring.length > 1) {
  } else {
    return count;
  }
  //map conversion from string to digits
  let bitmap = numstring.map((x) => parseInt(x, 10));
  let multiply = bitmap.reduce((a, b) => a * b);
  returnpersistence(multiply);
}

console.log(persistence(3456779));
