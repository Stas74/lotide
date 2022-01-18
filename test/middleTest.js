const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');



assertArraysEqual(middle(["bison", "camel", "duck", "elephant"]), ["camel", "duck"]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle(["bison", "camel"]), []);
assertArraysEqual(middle(["camel"]), []);
