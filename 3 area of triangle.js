// find area of a triangle if base and height given 
// formula used base * height / 2
const base = 4;
const height = 6;
const area = base * height / 2;
console.log(`${area} sq ft`);




// find area of a triangle if all three side is given using heron's formula 
// heron's formula  
// first do this --> allSides = (s1+s2+s3) /2
// then do this -->  allSides * (allSides -s1) * (allSides - s2) * (allSides - s3);

// there s1,s2 and s3 are all 3 given length of the sides 
const s1 = 4;
const s2 = 6;
const s3 = 8;


const allSides = ( s1 + s2 + s3) /2;
const temp = allSides * (allSides -s1) * (allSides - s2) * (allSides - s3);
const area2 = Math.sqrt(temp)
console.log(`${area2} sq ft`)