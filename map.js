/*
Map
Produces a new array of values by mapping each value in list through a
transformation function (iteratee). The iteratee is passed three arguments:
the value, then the index (or key) of the iteration, and finally a reference
to the entire list.
Hint: You're pretty much building JS's .map helper. Except your version will
work with arrays AND objects. A good first step would be checking if the first
argument is an object or an array.
Example:
map([1, 2, 3], (num) => { return num * 3; });
=> [3, 6, 9]
map({one: 1, two: 2, three: 3}, (num) => { return num * 3; });
=> [3, 6, 9]
*/

// Your code here!
const map = (listToMap, iterateeFunction) => {
	const result = []
	if (Array.isArray(listToMap)) {
		listToMap.forEach(item => {
			result.push(iterateeFunction(item))
			}
		)
		return result
	} else if (listToMap instanceof Object) {
		for(key in listToMap){
			result.push(iterateeFunction(listToMap[key]))
		}
		return result
	}
}
// console.log(map([1, 2, 3], (num) => { return num * 3; }));
// console.log(map({one: 1, two: 2, three: 3}, (num) => { return num * 3; }));
// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Map', () => {
  it('can map arrays', () => {
    const result = map([1, 2, 3], (num) => { return num * 3; });
    assert.deepEqual(result, [3,6,9]);
  })
  it('can map objects', () => {
    const result = map({one: 1, two: 2, three: 3}, (num) => { return num * 3; });
    assert.deepEqual(result, [3,6,9]);
  })
});