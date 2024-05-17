function checkOccurrences(string, letter, caseSensitive = true) {
    if (typeof string !== 'string' || typeof letter !== 'string' || letter.length !== 1) {
        throw new Error('Invalid input: string should be a string and letter should be a single character string.');
    }

    if (!caseSensitive) {
        string = string.toLowerCase();
        letter = letter.toLowerCase();
    }

    return string.split('').filter(char => char === letter).length;
}

// Usage example
const string = 'occurrences';
const letter = 'c';
console.log(checkOccurrences(string, letter)); // Output: 3
console.log(checkOccurrences(string, letter, true)); // Case insensitive example
