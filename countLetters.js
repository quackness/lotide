const countLetters = (string) => {
  let results = {};
  for (let letter of string) {
    if (results[letter]) {
      results[letter] += 1;//add 1
    } else {
      results[letter] = 1;//assign 1
    }
  }
  return results;
};

console.log(countLetters('LHL'));
const results1 = countLetters('LHL');

//TESTS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: ${actual} !== ${expected} `);
  }
};

assertEqual(results1["L"],2);
assertEqual(results1["H"],3);

module.exports = countLetters;



