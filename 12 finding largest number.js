// Find the largest using a user-defined method
function checkLargest(p,q,r) {
    if(p >= q && p >= r)
    {
        return p;
    }
    else if(q >= p && q >= r)
    {
        return q;
    }
    else
    {
        return r
    }
}

const a = 2;
const b = 3;
const c = 5;

const res = checkLargest(a, b, c);
console.log(`${a}, ${b}, ${c}\nLargest = ${res}`);



// Alternatively, find the largest using Math.max() method directly
const result = Math.max(a, b, c);
console.log(`${a}, ${b}, ${c}\nLargest = ${result}`);
