//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console. 
const assertArraysEqual = function(array1, array2, expected) {
  if (eqArrays(array1, array2) === expected) {
    console.log(` 👍 Assertion Passed: [${array1}] [${array2}] === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: [${array1}] [${array2}] !== ${expected} `);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;//if the arrays are not identical
      }
    }
    return true;//arrays are identical
  }
  return false;//arrays don't match length
};

assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1], false);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
assertArraysEqual(["1", "2", "3"], ["1", 2, 3], false);
assertArraysEqual([], ["1", "2", "6"], false);
assertArraysEqual(["dog", "cat"], ["1", "2", "6"], false);
assertArraysEqual(["dog", "cat"], ["1", "2", "6"], true);

