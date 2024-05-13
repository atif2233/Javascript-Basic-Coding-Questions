function isPalindrome(text) {
    const len = text.length;
    for (let i = 0; i < len / 2; i++) {
        if (text[i] !== text[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const word = 'daddy';
console.log(isPalindrome(word));
