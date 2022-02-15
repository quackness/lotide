const assert = require('chai').assert;//assertion library by Chai replaces assertEqual
const tail = require('../tail');


describe("#tail", () => {
  it("returns 2 last elements of the array", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("tail function does not modify the lenght of the original array", () => {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    tail(input);
    assert.deepEqual(input.length, 3);
  });
  it("returns empty tail array if the original array is empty", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns empty array if array has one element", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
});
