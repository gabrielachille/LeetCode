//Convert strings with dash or underscore
//and return camelCase strings
//6kyu

function toCamelCase(str) {
  str = str.toLowerCase();
  let dash = /-|_/g;

  for (i = 0; i < str.length; i++) {
    if (str[i] === dash) {
      // str[i].replace(str[i], str[i][0].toUpperCase());
      // str[i + 1].replace(str[i + 1], str[i + 1].toUpperCase());
      console.log(str[i]);
    }
    // console.log(str[i + 1]);
  }

  // str = str.split(dash);
  return str;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_Stealth_Warrior"));
console.log(toCamelCase("the_stealth-warrior"));
