const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {//if objects are not the same length return false
    return false;
  }
  for (let key of Object.keys(object1)) { //loop through keys  of object1
    if (object1[key] !== object2[key]) { //if value of object1 and object2 at key is not the same
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(object1, object2, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === expected) {//expected > true or false
    console.log(` 👍 Assertion Passed: ${inspect(object1)} ${inspect(object2)} === ${expected} `);
  } else {
    console.log(` 👎 Assertion Failed: ${inspect(object1)} ${inspect(object2)} !== ${expected} `);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba, true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc, false); // => false

module.exports = assertObjectsEqual;



