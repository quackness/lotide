const assertEqual = require('../assertEqual');
const tail = require('../tail');
// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements

const animals = ["cat", "dog"];
tail(animals);
assertEqual(animals.length, 1); //should fail since the original array has 2 elements

const result1 = tail([1]); //1 element
assertEqual(result1.length, 0);

const result2 = tail([]); //empty array
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined);