function duplicateCount(text) {
  let obj = {};
  let count = 0;

  for (let i of text) {
    i = i.toLowerCase();
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
    for(let i in obj){
    if (obj[i] > 1){
      count++
    }
    }
    return count;
  }
  return obj;
}

duplicateCount("SmartWatch");
