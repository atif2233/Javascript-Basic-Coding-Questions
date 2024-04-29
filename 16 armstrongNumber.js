function isArmstrongNumber(number) {
    const digits = String(number).split('').map(Number);
    const numDigits = digits.length;
    const sumOfPowers = digits.reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0);
    return sumOfPowers === number;
}

const armsNum = 370;
if (isArmstrongNumber(armsNum)) {
    console.log(`${armsNum} is an Armstrong number`);
} else {
    console.log(`${armsNum} is not an Armstrong number`);
}
