const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = []; //arry accumulator
  for (let item of array) { //loop to go through each item in the array
    results.push(callback(item)); //create an array with 1st letter of each item
  }
  return results;
};

const results1 = map(words, word => word[0]); //callback details
console.log(results1);


//Our map function will take in two arguments:
// An array to map
//A callback function
//The map function will return a new array based on the results of the callback function.

//Code testing

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
        return false;
      }
    }
    return true;
  }
  return false;
};

assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ], true);
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'o', 'o', 'o', 'p', 'i' ], false);
assertArraysEqual([ 'g', 'i', 'm', 'a' ], [ 'o', 'o', 'o', 'p', 'i' ], false);

module.exports = map;