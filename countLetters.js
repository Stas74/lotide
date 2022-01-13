const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The function should take in a sentence (as a string) 
// and then return a count of each of the letters in that sentence.
// You can use for...of loops with strings.

const countLetters = function(strings) {
  let chars = strings.split(' ').join('');
  const counts = {};
  
for (let char of chars) { 
  if (counts[char]) {        
    counts[char] += 1;
  } else {
    counts[char] = 1;
  }      
}
return console.log(counts)
}


countLetters("lighthouse in the house")

