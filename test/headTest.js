const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5,6,7]), 5); //function head returns 5, assertEqual verifies if 5 === 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Hello === Hello
assertEqual(head([1]),); // 1 !== undefined
assertEqual(head([1]), 1); // 1 === 1
assertEqual(head([]),); // undefined === undefined