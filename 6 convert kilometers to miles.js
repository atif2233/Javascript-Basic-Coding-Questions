// Convert kilometers into miles without using a function
const kmsToMiles = (kms) => {
    const factor = 0.621371;
    return kms * factor;
};

const kilometers = 5;
const miles1 = kmsToMiles(kilometers);
console.log(`Without Function: ${miles1}`);

// Convert kilometers into miles using a function
const convertKmsToMiles = (kms) => {
    const factor = 0.621371;
    return kms * factor;
};

const miles2 = convertKmsToMiles(5);
console.log(`With Function: ${miles2}`);
