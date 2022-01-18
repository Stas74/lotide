const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle([]), []);
  });
  it('returns ["camel", "duck"] for ["bison", "camel", "duck", "elephant"]', () => {    
    assert.deepEqual(middle(["bison", "camel", "duck", "elephant"]), ["camel", "duck"]); 
  });  
  it('returns [] for ["bison", "camel"]', () => {
    assert.deepEqual(middle(["bison", "camel"]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle(["camel"]), []);
  });

});