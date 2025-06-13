function createPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")");
  numbers.splice(5, 0, " ");
  numbers.splice(9, 0, "-");
  numbers = numbers.join("");
  return numbers;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
