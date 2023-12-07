//return true if the number of x's and o's are the same
//ignore casing
//loop through the string with 2 count variables
//update each with respective x or o
//return true/false both counts equal eachother
//7kyu

function XO(str) {
  // str = str.toLowerCase().split("");
  // return (
  //   str.filter((x) => x.match(/x/gi)).length ===
  //   str.filter((x) => x.match(/o/gi)).length
  // );
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));

function XO(str) {
  return (
    str.split("").filter((x) => x.match(/x/gi)).length ===
    str.split("").filter((x) => x.match(/o/gi)).length
  );
}
