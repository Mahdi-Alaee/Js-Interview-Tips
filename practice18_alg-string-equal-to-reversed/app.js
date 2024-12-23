const str = "مرغ";

function isEqual(input) {
  let reversedString = "";
  for (let i = 0; i < str.length; i++) {
    reversedString += str[str.length - i - 1];
  }
  return reversedString === str;
}

console.log(isEqual(str));
