function checkPrime(num) {
    if (num === 1) {
        return `${num} is neither prime nor composite number`;
    } else if (num < 1) {
        return `${num} number is not prime`;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} number is not prime`;
        }
    }

    return `${num} number is prime`;
}

const number = 5;
console.log(checkPrime(number));
