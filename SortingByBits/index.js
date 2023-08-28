//convert integers to binary
//make key/value pair
//sort by decimal value first
//then sort integers based on number of ones in binary digit
//put sorted integers into new array

function sortByBit(arr) {
  //declare empty array and object
  let arr2 = [];
  let obj = {};
  //convert digits in array to binary
  const binarymap = arr.map((x) => x.toString(2));
  for (let i = 0; i < binarymap.length; i++) {
    let count = 0;
    //push number of ones to arr2
    for (let j = 0; j < binarymap[i].length; j++) {
      if (binarymap[i][j] == 1) {
        count++;
      }
    }
    arr2.push(count);
    //create an object with binary keys: no. of ones values
    obj[binarymap[i]] = arr2[i];
  }
  console.log(parseInt(Object.keys(obj), 2));
}

sortByBit([0, 1, 2, 3, 4, 5, 6, 7, 8, 15]);
