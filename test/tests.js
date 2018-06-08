/*
 *  Testing
 */

// External dependencies
const expect = require('expect');

// Local dependencies
const targetSumExists = require('../target-sum-exists/targetSumExists');
const highestOccurrence = require('../highest-occurrence/highestOccurrence');

// Test targetSumExistsInTwoNumbers
describe('targetSumExists', () => {

  it('Validates that targetSumExistsInTwoNumbers correctly determines whether the sum can be made from two numbers in the array', () => {

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

describe('highestOccurrence', () => {

  it('Validate that checkHighestOccurrence correctly counts the highest occurences of elements in a provided array', () => {

    expect(highestOccurrence.checkHighestOccurrence([2, 3, 2, 5, 6, 7, 2])).toEqual([2]);
    expect(highestOccurrence.checkHighestOccurrence([1, 2, 3, 3, "a", "b", "b", "c"])).toEqual([3, "b"]);
    expect(highestOccurrence.checkHighestOccurrence(["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"])).toEqual(["it"]);
    expect(highestOccurrence.checkHighestOccurrence([])).toEqual([]);
    expect(highestOccurrence.checkHighestOccurrence(["4", "4", "4", "4", 4, 4, 4])).toEqual(["4"]);
    expect(highestOccurrence.checkHighestOccurrence(["4", "4", "4", "4", 4, 4, 4])).not.toEqual([4]);
  });
});
