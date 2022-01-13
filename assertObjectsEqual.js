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

// Your assertion function should leverage this recently implemented function.
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false
  }  


  /*
  ✅✅✅ Assertion Passed: [object Object] === [object Object]
  🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]
  */  
};


assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
