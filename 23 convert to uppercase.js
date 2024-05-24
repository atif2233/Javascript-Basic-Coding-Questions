function convertToUppercase(inputString) {
    if (typeof inputString !== 'string' || inputString.length === 0) {
        return '';
    }
    
    const firstCharacter = inputString.charAt(0);
    const uppercaseFirstCharacter = firstCharacter.toUpperCase();
    const remainingCharacters = inputString.slice(1);
    const resultString = uppercaseFirstCharacter.concat(remainingCharacters);
    return resultString;
}

const exampleString = 'convert';
console.log(convertToUppercase(exampleString)); // Output: "Convert"

const emptyString = '';
console.log(convertToUppercase(emptyString)); // Output: ""
