//Convert strings with dash or underscore
//and return camelCase strings
//6kyu

function toCamelCase(str) {
  str = str.split(/-|_/g);
  return str;
  //planned- str.map(if not first item in array then firstletter.touppercase())
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_Stealth_Warrior"));
console.log(toCamelCase("the_stealth-warrior"));
