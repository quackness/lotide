const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 👎 \uD83D\uDD34 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const countLetters = function(sentence) {
  const result = {};
  //you can put between {} T':1 to test a diffrent scenario
  sentence = sentence.split(" ").join(""); //change the sentence into one string without spaces

  for (let i = 0; i < sentence.length; i++) { //loop through the sentence
    if (result[sentence[i]]) { //if the letter at position i exists inside results object then add 1
      result[sentence[i]] += 1;
    } else {
      result[sentence[i]] = 1; //first run for every letter will always be false and will assign 1 to a letter
    }
  }
  console.log(result);
  return result;
};

const sentence1 = "Today is Monday";
let result = countLetters(sentence1);

assertEqual(result["T"], 1, true);
assertEqual(result["o"], 2, true);
assertEqual(result["M"], 2, false);