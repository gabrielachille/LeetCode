//words in string will have a number
//return string rearranged based on order of numbers

function order(words) {
  words = words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
  return words;
}

console.log(order("is2 Thi1s T4est 3a"));
