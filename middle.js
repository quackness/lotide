const middle = function(arr) {
  if (arr.length <= 2) { // 2 or less arguments in the array, the most specific condition at the top
    return [];
  }
  if (arr.length % 2 === 1) { //the length of the array is an odd number
    return [arr[Math.floor(arr.length / 2)]];
  }
  if (arr.length % 2 === 0) { ///the length of the array is an even number
    return [arr[arr.length / 2 - 1], arr[arr.length / 2 ]];
  }
};
  
module.exports = middle;

//============
// function *middle* should return the middle-most element
//for array with one or two values it should return an empty array
//odd amount of numbers in the array should return one element > modulo
//even amount of numbers should return 2 > modulo
//write test assertions
// console.log(middle([1]));
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 11, 7, 6, 19, 33, 20])); // [ 11, 7 ]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

//TESTS have been moved to middleTest.js


