const assertEqual = require('./assertEqual');

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
}


module.exports = eqArrays;

//=============
// another approach for exports  using objects
// module.exports = {
//   eqArrays, assertEqual
// }
//to use it I will need to keep:
// const assertEqual = function(actual, expected) { //actual: true or false from eqArrays function and expected from the function call
//   if (actual === expected) {
//     console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
//   } else {
//     console.log(` 👎 Assertion Failed: ${actual} !== ${expected} `);
//   }
// };