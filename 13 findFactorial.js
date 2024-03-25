function factorial(num) {
    // Handle edge cases
    if (num === 0) {
        return `The factorial of ${num} is 1`;
    } else if (num < 0) {
        return `The factorial of negative numbers is not defined`;
    }

    // Calculate factorial
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    return `The factorial of ${num} is ${fact}`;
}

// Test with a number
const number = 5;
console.log(factorial(number));
