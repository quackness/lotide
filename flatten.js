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


const flatten = function(input) {
  const newArr = [];
  for (let i = 0; i < input.length; i++) {
    //console.log(typeof input[i]);
    if (!Array.isArray(input[i])) {
      newArr.push(input[i]);
    } else {
      for (let j = 0; j < input[i].length; j++) {
        newArr.push(input[i][j]);
      }
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ], true);
assertArraysEqual(flatten([1, 0, 3, [4, 9], [6, 9]]), [1,[0,8,4],0,6,1], false); //added a new test






