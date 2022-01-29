//Original function which was asked to be copied from a diffrent task:

const assertEqual = function(actual, expected) { //actual: true or false from eqArrays function and expected from the function call
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: ${actual} !== ${expected} `);
  }
};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 

const eqArrays = function(arr1, arr2) { //function takes two arrays
  if (arr1.length === arr2.length) { // checking if arrays are the same length
    for ( i = 0; i < arr1.length; i++) { //runs a loop on the first array
      if (arr1[i] !== arr2[i]) { //checks if arguments are not the same
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
