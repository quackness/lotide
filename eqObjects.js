const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: ${actual} !== ${expected} `);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) { //checking if the length is the same
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {  //if they are not arrays
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) { //if the elements at i are not the same return false
        return false;
      }
    }
    return true;
  }
  return false;
};

assertEqual(eqArrays(1,2), false);
eqArrays([1,2,3],[1,2,3,4]);
eqArrays([1,3,4],[1,3,4]);
eqArrays([1,6],[3,6]);


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back false
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {//if objects are not the same length return false
    // console.log(Object.keys(object1))
    // console.log(Object.keys(object2))
    return false;
  }
  for (let [key, value] of Object.entries(object1)) { //loop through keys and values of object1
    // console.log(key, value)
    if (value !== object2[key]) { //if value of object1 at the key of object2 is not the same
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


// First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further:
//return false
// After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys
//are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
//Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
//As soon as there is not a match, we can return false
//Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)


//Additional code tests to help with understanding
// console.log('get an array of object keys :>> ', Object.keys(abc));
// console.log('get an array of object values :>> ', Object.values(abc));
// console.log('get an array of object entries :>> ', Object.entries(abc));

module.exports = eqObjects;