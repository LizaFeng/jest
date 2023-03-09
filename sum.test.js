//importing sum
const sum = require('./sum');
const sub = require('./subtract');
const mul = require('./multiply');
const div = require('./divide');


test('adds 1 + 2 to equal 3', () => {
  /* This test used expect and toBe to test that
    two values were exactly identical */
  expect(sum(1, 2)).toBe(3);
});

test('sub 1 - 2 to equal -1', () => {
  /* This test used expect and toBe to test that
    two values were exactly identical */
  expect(sub(1, 2)).toBe(-1);
});

test('multiply 1 * 2 to equal 2', () => {
  /* This test used expect and toBe to test that
    two values were exactly identical */
  expect(mul(1, 2)).toBe(2);
});

test('divides 4 / 2 to equal 2', () => {
  /* This test used expect and toBe to test that
    two values were exactly identical */
  expect(div(4, 2)).toBe(2);
});