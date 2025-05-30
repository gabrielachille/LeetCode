//return every number in an array

function filter_list(l) {
  return l.filter((x) => typeof x === "number");
}

console.log(filter_list([1, "a", "b", 0, 15]));
