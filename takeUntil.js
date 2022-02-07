// The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.



//arrow function

const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item); //push the value to the array
      //console.log(callback(item), item);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//Tests

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
};

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], true);
assertArraysEqual(results1, [ "cat", "dog" ], false);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ], true);
assertArraysEqual(results2, [ ], false);
