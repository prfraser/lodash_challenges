/*
Throttle
Creates and returns a new, throttled version of the passed function, that, when
invoked repeatedly, will only actually call the original function at most once
per every wait milliseconds. Useful for rate-limiting events that occur faster
than you can keep up with.
Example:
let total = 0;
const count = () => ++total;
const throttleCount = throttle(count, 200);
throttleCount()
=> 1
throttleCount()
=> 1
// Wait 200ms and then:
throttleCount()
=> 2
throttleCount()
=> 2
*/

// Your code here!
const throttle = (funcToRun, runTimer) => {
  let goodToGo = null;
  let result;

  return function() {
    if (Date.now() > (goodToGo + runTimer) || goodToGo === null) {
      goodToGo = Date.now();
      result = funcToRun();
      return result
    } else {
      return result
    }
  }
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Throttle', () => {
  it('returns a function', () => {
    const exampleThrottle = throttle(() => {})
    assert.equal(typeof exampleThrottle, 'function');
  });
  it('effectively throttles', (done) => {
    let total = 0;
    const count = () => ++total;
    const throttleCount = throttle(count, 200);

    assert.equal(throttleCount(), 1);
    assert.equal(throttleCount(), 1);

    // Wait 200ms and try again
    new Promise(resolve => setTimeout(resolve, 200)).then(() => {
      assert.equal(throttleCount(), 2);
      assert.equal(throttleCount(), 2);
      done()
    })
  });
});