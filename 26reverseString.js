function reverse(str) {
  if (typeof str !== "string") {
    throw new console.error("input must be a string");
  }
  const strLength = str.length;
  let reverseStr = "";
  for (let i = strLength - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

const str = "coding";
console.log(reverse(str));//gnidoc
