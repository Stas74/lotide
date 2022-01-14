// It will take in two parameters as well:

// The array to work with
// The callback (which Lodash calls "predicate")
// To keep things simple, the callback should only be provided one value: The item in the array.

const takeUntil = function(array, callback) {
  const finalArr = [];
  for (let elem of array) {
    if (callback(elem) === true) {
      return finalArr;
    } else {
      finalArr.push(elem);
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/