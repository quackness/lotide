const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], []), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "dog"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["6", "3"]), false);

//=============
//below is another "require" approach using object deconstruction:
//const {assertEqual, eqArrays} = require('../eqArrays');