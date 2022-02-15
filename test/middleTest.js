const assert = require('chai').assert;//assertion library by Chai replaces assertEqual
const middle = require('../middle');


describe("#middle", () => {
  it("returns an empty array for array with one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns middle index if the array length is odd", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns 2 middle indexes if the array length is even", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it("returns empty array if array has no element", () => {
    assert.deepEqual(middle([]), []);
  });
});




