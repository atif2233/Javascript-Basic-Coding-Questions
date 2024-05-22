function findCertainCharacter(string, start, end) {
  // Check if all inputs are strings
  if (
    typeof string !== "string" ||
    typeof start !== "string" ||
    typeof end !== "string"
  ) {
    throw new Error("Invalid input: 'string', 'start', and 'end' parameters must be strings");
  }

  // Check if the string is empty
  if (string.length === 0) {
    return "string is empty";
  }

  // Check if the string starts and ends with certain characters
  if (string.startsWith(start) && string.endsWith(end)) {
    return "string starts and ends with certain characters";
  }
  else if (string.startsWith(start)) {
    return "string starts with certain character but does not end with certain characters";
  }
  else if (string.endsWith(end)) {
    return "string does not start with certain character but ends with certain characters";
  }
  else {
    return "string does not start and end with certain characters";
  }
}

// Usage example
const string = "anything";
const start = "a";
const end = "g";
console.log(findCertainCharacter(string, start, end));
