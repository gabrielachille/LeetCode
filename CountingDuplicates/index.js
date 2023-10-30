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
    if (obj[i] > 1){
      count++
    }
    
  }
  return obj;
}

duplicateCount("SmartWatch");
