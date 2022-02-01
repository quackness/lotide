

const eqArrays = function(arr1, arr2) {//function takes two arrays
  if (arr1.length === arr2.length) {// checking if arrays are the same length
    for (let i = 0; i < arr1.length; i++) {//runs a loop on the first array
      if (arr1[i] !== arr2[i]) {//checks if arguments are not the same
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(` 👍 Assertion Passed: [${array1}] === [${array2}] `);
  } else {
    console.log(` 👎 Assertion Failed: [${array1}] !== [${array2}] `);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] === " ") {//if there is a space then skip it
      continue;
    }
    if (!results[sentence[i]]) { //if the letter does not exist as a key in the object
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);//if the letter exists as a key in the object,then we push the index
    }
  }
  return results;
};
  
console.log(letterPositions("lighthouse in the house"));

//create a for loop to go through the sentence
//letters will be keys, array will have an index of the letters
//if there is more than 1 of the same letter push its index to an array

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [2]);
assertArraysEqual(letterPositions("poland").p, [2]);
assertArraysEqual(letterPositions("bye").y, [1]);