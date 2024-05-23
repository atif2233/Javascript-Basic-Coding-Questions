function checkSubstring(string, subString) {
    if (typeof string !== 'string' || typeof subString !== 'string') {
        throw new Error('Both inputs must be strings.');
    }
    return string.includes(subString);
}

// Example usage:
const myString = 'string';
const mySubString = 1;

try {
    console.log(checkSubstring(myString, mySubString));
} catch (error) {
    console.error(error.message);
}
