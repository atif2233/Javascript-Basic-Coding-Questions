function factorial(num) {
    // Base cases
    if (num === 0) {
        return 1;
    } else if (num < 0) {
        return NaN; // Return NaN for negative numbers
    }
    
    // Recursive case
    return num * factorial(num - 1);
}

// Test with a number
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`);
