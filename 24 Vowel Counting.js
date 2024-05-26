function numberOfVowels(string) {
    // Set of vowels for case-insensitive matching
    const vowels = new Set('aeiouAEIOU');
  
    // Use a loop to iterate through the string and count vowels
    let count = 0;
    for (const char of string) {
      if (vowels.has(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  const string = "atif";
  console.log(numberOfVowels(string)); // Output: 1
  