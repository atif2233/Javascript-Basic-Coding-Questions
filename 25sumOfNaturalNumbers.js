/**
 * Calculates the sum of all positive integers up to a given number.
 * @param {number} num - The number up to which the sum is calculated.
 * @returns {number} - The sum of all positive integers up to the given number.
 */
function sumUpTo(num) {
    // Check if the input is a valid number
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error("Input must be a valid number.");
    }

    // Handle negative numbers by returning 0
    if (num <= 0) {
        return 0;
    }

    // Handle non-integer numbers by rounding down
    num = Math.floor(num);

    // Recursive case
    if (num > 0) {
        return num + sumUpTo(num - 1);
    } else {
        return 0; // Base case: sum up to 0 is 0
    }
}

// Example usage
const num = 5;
console.log(sumUpTo(num)); // Output: 15
