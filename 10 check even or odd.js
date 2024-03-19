function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}

const num = 3;
console.log(checkEvenOrOdd(num));

// Using ternary operator
const res = num % 2 === 0 ? 'even' : 'odd';
console.log(`${num} is ${res}`);
