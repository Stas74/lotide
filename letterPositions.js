const eqArrays = function(arrOne, arrTwo) {
  // if (arrOne.length !== arrTwo.length) {
  //   return false
  // }

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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]
    if (letter === " ") {
      continue
    }
    if (letter in results) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("hello").e, [1]);