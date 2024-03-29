function table(num, start = 1, end = 10) {
    for (let i = start; i <= end; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Generate table for numbers 5 and 10 from 1 to 10
table(5);
console.log("----------");
table(10);

// Generate table for number 7 from 2 to 5
console.log("----------");
table(7, 2, 5);
