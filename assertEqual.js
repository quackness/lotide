// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 \uD83D\uDD34 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: ${actual} !== ${expected} `);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Emojis search https://unicode.org/emoji/charts/full-emoji-list.html#1f534
// Unicode search https://www.fileformat.info/info/unicode/char/search.htm?q=U%2B1F535&preview=entity
// C/C++/Java source 