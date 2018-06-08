/*
 *  Function to determine whether a given number can be made 
 *  with the sum of any two numbers in a given array
 */

const sumFunc = {};

sumFunc.targetSumExistsInTwoNumbers = (arr, targetSum) => {

  // Sort the array
  arr.sort();

  // Define index accessors
  let i = 0;
  let j = arr.length - 1;

  // Loop through the array
  while(i < arr.length && j > i) {

    // Check if a number at the current index + itself is equal to the target
    if(arr[i] + arr[i] === targetSum || arr[j] + arr[j] === targetSum) {

      return true;
    } else if(arr[i] + arr[j] > targetSum) {

      // Check if the current sum of selected numbers is too large
      j --;
    } else if(arr[i] + arr[j] < targetSum) {

      // Check if the current sum of selected numbers is too small
      i ++;
    } else if(arr[i] + arr[j] === targetSum) {
      
      // Check if the current sum of selected numbers is equal to the target
      return true;
    } else {
      
      // Return false if none of the above are true
      return false;
    }
  }

  // If the loop terminates then there are no matching pairs
  return false;
};

// Export the module
module.exports = sumFunc;
