const without = function(source, itemsToRemove) {
  const newArray = [...source]; //spread operator to create a new array
  for (let i = 0; i < itemsToRemove.length; i++) { //looping over the second array
    const duplicate = newArray.indexOf(itemsToRemove[i]); //indexOf returns the index of the first occurrence in the array
    if (duplicate !== -1) { //indexOf returns -1 if it cannot find an argument
      newArray.splice(duplicate, 1);
    }
  }
  //console.log(newArray);
  return newArray;
};


//assertions
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

assertArraysEqual(without([1, 2, 3], [1]),[2,3],true); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], true); // => ["1", "2"]

module.exports = without;

//compare two arrays
//Find the indexOf
//Remove an item by index position
//return a new array
