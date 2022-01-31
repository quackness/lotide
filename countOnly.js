const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 \uD83D\uDD34 Assertion Failed: ${actual} !== ${expected} `);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // console.log(results)
  for (const item of allItems) { //we go through the firstNames
    if (itemsToCount[item]) { //if a firstName exists in itemsToCount then enter the if
      if (results[item]) { //if results item exists add 1
        results[item] += 1;
      } else {
        results[item] = 1; //if not then assign to 1
      }
    }
  //   if (results[item]) {
  //     results[item] += 1;
  //   } else {
  //     results[item] = 1;
  //   }
  }
  console.log(results);
  return results;
};

const firstNames = [ //allItems
  "Karl", //item
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); //itemsToCount

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);