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


const assertArraysEqual = function(array1, array2, expected) {
  if (eqArrays(array1, array2) === expected) {
    console.log(` 👍 Assertion Passed: [${array1}] [${array2}] === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: [${array1}] [${array2}] !== ${expected} `);
  }
};


const middle = function(arr) {
  if (arr.length <= 2) { // 2 or less arguments in the array, the most specific condition at the top
    return [];
  }
  if (arr.length % 2 === 1) { //the length of the array is an odd number
    return [arr[Math.floor(arr.length / 2)]];
  }
  if (arr.length % 2 === 0) { ///the length of the array is an even number
    return [arr[arr.length / 2 - 1], arr[arr.length / 2 ]];
  };
}
  
// function should return the middle-most element 
//for array with one or two values it should return an empty array 
//odd amount of numbers in the array should return one element > modulo
//even amount of numbers should return 2 > modulo 
//write test assertions

console.log(middle([1]))
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 11, 7, 6, 19, 33, 20])) // [ 11, 7 ]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

//TESTS 
assertArraysEqual([1, 2], [ 1, 2], true);
assertArraysEqual([1, 2], [], false);
assertArraysEqual([1, 2, 3, 4, 11, 7, 6, 19, 33, 20], [1, 2, 3], false);
assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], true);
