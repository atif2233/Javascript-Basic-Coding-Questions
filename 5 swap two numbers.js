// Function to swap two numbers using temporary variable
function swapWithTemp(a, b) {
    console.log(`Before swapping \n The value of a is ${a} \n The value of b is ${b}`);

    // Swapping using temporary variable
    var temp = a;
    a = b;
    b = temp;

    console.log(`After Swapping \n The value of a is ${a} \n The value of b is ${b}`);
}

// Function to swap two numbers without temporary variable
function swapWithoutTemp(a, b) {
    console.log(`Before swapping \n The value of a is ${a} \n The value of b is ${b}`);

    // Swapping without temporary variable
    a = a + b;
    b = a - b;
    a = a - b;

    console.log(`After swapping \n The value of a is ${a} \n The value of b is ${b}`);
}

// Test cases
swapWithTemp(10, 20);
swapWithoutTemp(7, 5);
