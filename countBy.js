/*
Count By
Sorts a list into groups and returns a count for the number of objects in each
group. Similar to groupBy, but instead of returning a list of values, returns a
count for the number of values in that group.
Example:
_.countBy([1, 2, 3, 4, 5], (num) => {
  return num % 2 == 0 ? 'even': 'odd';
});
=> {odd: 3, even: 2}
*/

// Your code here!
const countBy = (list, groupFn) => {
  const grouped = {}; // Create an empty object for storing the results.

  list.forEach((item) => { // loop through each item.
    // Call the groupFn predicate function to figure out what group the item belongs in.
    const groupKey = groupFn(item).toString();

    // Update the result object.
    // (grouped[groupKey] || 0) will get the current number in the result object for that group or default to zero.
    grouped[groupKey] = (grouped[groupKey] || 0) + 1;
  });

  return grouped;
};

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Count By', () => {
  it('can group true/false', () => {
    let grouped = countBy([1, 2, 3, 4, 5], (num) => num % 2 === 0);
    assert.equal(grouped.true, 2);
    assert.equal(grouped.false, 3);
  })
  it('can group lists', () => {
    const list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const grouped = countBy(list, (numWord) => numWord.length);
    assert.equal(grouped['3'], 4);
    assert.equal(grouped['4'], 3);
    assert.equal(grouped['5'], 3);
  })
});