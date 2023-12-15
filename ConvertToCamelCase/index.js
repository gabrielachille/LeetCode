//Convert strings with dash or underscore
//and return camelCase strings
//6kyu

function toCamelCase(str) {
  str = str.toLowerCase();

  for (i = 0; i < str.length; i++) {
    // if (!str[0]) {
    //   str[i].replace(str[i], str[i][0].toUpperCase());
    // }
  }

  // str = str.split(/-|_/g);
  return str;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_Stealth_Warrior"));
console.log(toCamelCase("the_stealth-warrior"));
