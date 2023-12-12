//Convert strings with dash or underscore
//and return camelCase strings

function toCamelCase(str) {
  let dash = /-_/gi;
  let str = str.split(dash);
  return str;
}
