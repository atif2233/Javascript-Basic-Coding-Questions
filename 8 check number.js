function isPositive(num) {
    return num > 0;
}

function isNegative(num) {
    return num < 0;
}

function isZero(num) {
    return num === 0;
}

function isNumeric(num) {
    return !isNaN(num) && isFinite(num);
}

function checkNumber(num) {
    if (isNumeric(num)) {
        if (isPositive(num)) {
            console.log("Number is positive");
        } else if (isNegative(num)) {
            console.log("Number is negative");
        } else if (isZero(num)) {
            console.log("Number is zero");
        }
    } else {
        console.log("Not a number");
    }
}

checkNumber("g");
