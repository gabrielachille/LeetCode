function duplicateCount(text) {
  // iterate through string and return the amount of repeated characters
  let count = 0;
  let obj = {};

  for (let i of text) {
    //creates a charater key for every new character,
    //and sets its value to 1
    i = i.toLowerCase();
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      //if there is a repeated character it adds +1 to the value
      obj[i]++;
    }
  }
  //counts how many characters appear more than once
  for (let i in obj) {
    if (obj[i] > 1) {
      //if a value is more than 1 count goes up by 1
      count++;
    }
  }
  return count;
}


console.log(duplicateCount("aabbcde"));
