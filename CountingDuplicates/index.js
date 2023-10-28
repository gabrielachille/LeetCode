function duplicateCount(text) {
  let obj = {};

  for (let i of text) {
    i = i.toLowerCase();
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  return obj;
}

duplicateCount("SmartWatch");
