// original function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 \uD83D\uDD34 Assertion Failed: ${actual} !== ${expected} `);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

//Create a function tail which returns the "tail" of an array:
// everything except for the first item (head) of the provided array.

const tail = function(array) {
  return array.slice(1);
};
//console.log(tail("Lighthouse Labs", "Bootcamp")); testing if slice works
//and it does
//commenting out the test cases since we were provided with new ones
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//console.log(result);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

//New Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const animals = ["cat", "dog"];
tail(animals);
assertEqual(animals.length, 1); //should fail since the original array has 2 elements

const result1 = tail([1]); //1 element
assertEqual(result1.length, 0);

const result2 = tail([]); //empty array
assertEqual(result2.length, 0);


