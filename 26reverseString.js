/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 * @throws {TypeError} - If the input is not a string.
 */
function reverse(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.split('').reverse().join('');
}
const str1 = "coding";
console.log(reverse(str1));  // Output: gnidoc
