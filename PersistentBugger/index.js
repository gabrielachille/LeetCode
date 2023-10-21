function persistence(num) {
  let count = 0;
  // turn digits into string
  let numstring = String(num);
  while (numstring.length > 1) {
    //use spread operator to turn string into array
    //use reduce to multiply different numbers to one number
    //don't worry about turning stringed numbers back to digits because of type conversion
    // rinse and repeat until single digit
    numstring = String([...numstring].reduce((prev, curr) => prev * curr));
    count++;
  }

  return count;
}
