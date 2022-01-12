const  assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    return true
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return false
  }
}

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
/*
const without = function(source, itemsToRemove) {
  let finArr = [];
  for (let j = 0; j < itemsToRemove.length; j++) {    
        for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[j]) {
        finArr.push(source[i])
      }
    }
  } 
  return finArr
}
*/
const without = function(source, itemsToRemove) {
  
  const filteredArray = source.filter(function(x) { 
    return itemsToRemove.indexOf(x) < 0;
  });
  return filteredArray
}



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);