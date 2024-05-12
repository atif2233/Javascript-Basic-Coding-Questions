function isPalindrome(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const stringArray = text.split('');
    const reversedArray = stringArray.slice().reverse();
    const reversedString = reversedArray.join('');
    return text === reversedString;
}

const string = 'mydad';
const isPalindromeResult = isPalindrome(string);
if (isPalindromeResult) {
    console.log(`${string} is a palindrome`);
} else {
    console.log(`${string} is not a palindrome`);
}
