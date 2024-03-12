// The Fisher-Yates shuffle algorithm, also known as the Knuth shuffle,is an algorithm
// used to randomly shuffle the elements of an array or a list.
// It was developed by Ronald A. Fisher and Frank Yates in the 1930s and later popularized by Donald E.
// Knuth in his book "The Art of Computer Programming."

function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
  
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(shuffle(arr));