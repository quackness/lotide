
const flatten = function(input) {
  const newArr = [];//accumulator 
  for (let i = 0; i < input.length; i++) {
    typeof input[i]; //printing type of the element
    if (!Array.isArray(input[i])) { //checking if input at i is not an array
      newArr.push(input[i]); //add to element to newArr
    } else {
      for (let j = 0; j < input[i].length; j++) { //second loop to handle the 2nd layer
        newArr.push(input[i][j]); //pushes each element from the 2nd layer into newArr, accesing position 2 to access 0 and 1 within
      }
    }
  }
  return newArr;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

//assertArraysEqual function

const assertArraysEqual = function(array1, array2, expected) {
  if (eqArrays(array1, array2) === expected) {
    console.log(` 👍 Assertion Passed: [${array1}] [${array2}] === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: [${array1}] [${array2}] !== ${expected} `);
  }
};

//eqArrays

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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ], true);
assertArraysEqual(flatten([1, 0, 3, [4, 9], [6, 9]]), [1,[0,8,4],0,6,1], false); //added a new test

module.exports = flatten;

