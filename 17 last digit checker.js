// Define an array of numbers
var numbers = [28, 38, 48];

// Define a variable to store the last digit of each number
var lastDigits = [];

// Loop through each number in the array
for (var i = 0; i < numbers.length; i++) {
    // Calculate the last digit of the current number
    lastDigits.push(numbers[i] % 10);
}

// Check if all the last digits are the same
var allSame = lastDigits.every(function(digit) {
    return digit === lastDigits[0];
});

// Output the result
if (allSame) {
    console.log("All the numbers have the same last digit");
} else {
    console.log("All the numbers do not have the same last digit");
}
