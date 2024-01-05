//Convert strings with dash or underscore
//and return camelCase strings
//6kyu

function toCamelCase(str) {
  str = str.toLowerCase();
  str = str.split("");
  str[0] = str[0].toUpperCase();
  let dash = /-|_/g;

  for (i = 0; i < str.length; i++) {
    if (dash.test(str[i])) {
      str[i + 1] = str[i + 1].toUpperCase();
      str.splice(i, 1);
    }
  }

  return str.join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_Stealth_Warrior"));
console.log(toCamelCase("the_stealth-warrior"));

function toCamelCase(str) {
  let dash = /-|_/gi;

  return str
    .split(dash)
    .map(
      (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
    )
    .join("");
}
