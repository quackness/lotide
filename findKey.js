//go through the object, scan through names and stars
//if stars === 2 then return the key
//use object.entries, it gives an array of the key at 0 and value at 1

const findKey = (object, callback) => {
  let items = Object.entries(object); //[["Blue Hill", { stars: 1 }]]
  for (let item of items) {
    if (callback(item[1]) === true) {
      return item[0];
    }
  }
};

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

//TESTS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: ${actual} !== ${expected} `);
  }
};

assertEqual(results, "noma"); //true
assertEqual(results, "Ora"); //false
assertEqual(results, " "); //false

module.exports = findKey;
