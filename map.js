// Our map function will take in two arguments:
//
// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false
  }

  for (let i = 0; i < arrOne.length; i++) {    
    if (arrOne[i] !== arrTwo[i]) {
      return false
    }
  }
  return true
}

const  assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    return true
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return false
  }
}


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.length);
console.log(results2);


assertArraysEqual([ 6, 7, 2, 5, 3 ], results2)