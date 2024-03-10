// Converts Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    // Formula: fahrenheit = (celsius * 9/5) + 32
    return (celsius * 9/5) + 32;
}

// Converts an array of Celsius temperatures to Fahrenheit
function convertCelsiusArrayToFahrenheit(celsiusArray) {
    // Map each Celsius value to its Fahrenheit equivalent
    return celsiusArray.map(celsius => convertCelsiusToFahrenheit(celsius));
}

// Test the function with a single Celsius value
const celsiusValue = 11;
const fahrenheitValue = convertCelsiusToFahrenheit(celsiusValue);
console.log(`Celsius: ${celsiusValue}, Fahrenheit: ${fahrenheitValue}`);

// Test the function with an array of Celsius values
const celsiusArray = [10, 20, 30];
const fahrenheitArray = convertCelsiusArrayToFahrenheit(celsiusArray);
console.log(`Celsius Array: ${celsiusArray}, Fahrenheit Array: ${fahrenheitArray}`);
