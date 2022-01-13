const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arrObj1 = Object.keys(object1);
  let arrObj2 = Object.keys(object2);
  
  if (arrObj1.length !== arrObj2.length) {
    return false
  }
  for (let elem of arrObj1) { 
    // Checks if value are arrays
    if (Array.isArray(object1[elem])) {
      if (Array.isArray(object2[elem])) {
        if (!eqArrays(object1[elem], object2[elem])) {
          console.log('i am trigged')
          return false
        }
      }
    } else

        // Compares primitives
    if (object1[elem] !== object2[elem]) {
      return false
    }
     
  }
  return true

};

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false