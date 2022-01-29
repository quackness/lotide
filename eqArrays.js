// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: ${actual} !== ${expected} `);
  }
};

// TEST CODE from the origal task (not relevant for this exc.)
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);



//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for ( i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
