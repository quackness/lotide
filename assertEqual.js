// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" 👍 Assertion Passed: " + actual + "===" + expected);
  } else {
    console.log(" 👎 Assertion Failed: " + actual + "!==" + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


// Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
// Assertion Passed: 1 === 1