const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` \uD83D\uDD34 Assertion Failed: ${actual} !== ${expected} `);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


//function below will return first element in the array
const head = function(array) {
  return array[0];
};


assertEqual(head([5,6,7]), 5); //function head returns 5, assertEqual verifies if 5 === 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Hello === Hello
assertEqual(head([1]),); // 1 !== undefined
assertEqual(head([1]), 1); // 1 === 1 
assertEqual(head([]),); // undefined === undefined 