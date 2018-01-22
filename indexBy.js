/*
Index By
Given a list, and a property name, returns an object with an index of each item.
Example:
const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}];
indexBy(stooges, 'age');
=> {
  "40": {name: 'moe', age: 40},
  "50": {name: 'larry', age: 50}
}
*/

// Your code here!
const indexBy = (initObjects, newIndex) => {
  const newObject = {}
  initObjects.forEach(obj => {
    newObject[obj[newIndex]] = obj
  })
  return newObject
}

// const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}];
// console.log(indexBy(stooges, 'age'));

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('IndexBy', () => {
  it('can index by a property', () => {
    const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}];
    const result = indexBy(stooges, 'age');
    assert.deepEqual(result, {
      "40": {name: 'moe', age: 40},
      "50": {name: 'larry', age: 50}
    });
  });
});