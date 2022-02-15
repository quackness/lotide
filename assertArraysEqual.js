const eqArrays = require('./eqArrays');


const assertArraysEqual = function(array1, array2, expected) {
  if (eqArrays(array1, array2) === expected) {
    console.log(` 👍 Assertion Passed: [${array1}] [${array2}] === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: [${array1}] [${array2}] !== ${expected} `);
  }
};

module.exports = assertArraysEqual;