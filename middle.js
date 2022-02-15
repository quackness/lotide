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

//TESTS have been moved to middleTest.js


