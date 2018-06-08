/*
 *  Testing
 */

// External dependencies
const expect = require('expect');

// Local dependencies
const targetSumExists = require('../target-sum-exists/targetSumExists');

// Test targetSumExistsInTwoNumbers
describe('targetSumExists', () => {

  it('validates that function correctly determines whether the sum can be made from two numbers in the array', () => {

    // Truthy tests
    expect(targetSumExists.targetSumExistsInTwoNumbers([10, 20], 30)).toBeTruthy();
    expect(targetSumExists.targetSumExistsInTwoNumbers([10, 20], 40)).toBeTruthy();
    expect(targetSumExists.targetSumExistsInTwoNumbers([1, -1, 4, -5], 0)).toBeTruthy();
    expect(targetSumExists.targetSumExistsInTwoNumbers([5, 9, 1, 4, 7, 3], 11)).toBeTruthy();
    expect(targetSumExists.targetSumExistsInTwoNumbers([5, 9, 1, 4, 7.5, 3], 15)).toBeTruthy();

    // Falsy tests
    expect(targetSumExists.targetSumExistsInTwoNumbers([10, 20], 35)).toBeFalsy();
    expect(targetSumExists.targetSumExistsInTwoNumbers([], 55)).toBeFalsy();
    expect(targetSumExists.targetSumExistsInTwoNumbers(["hello", "world"], 55)).toBeFalsy();
    expect(targetSumExists.targetSumExistsInTwoNumbers([25, "hello", 30, "world"], 55)).toBeFalsy();
  });
});
