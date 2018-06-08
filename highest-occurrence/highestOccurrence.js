/*
 *  Function to find the highest occurrence of a given element in an array
 */

const occurrenceFunc = {};

occurrenceFunc.checkHighestOccurrence = (arr) => {

  // Create an object to hold an associative array
  let dictionary = {};

  // Loop through the array and count the number of occurrences of each element
  // Add these values to an associative array 
  for(let i = 0; i < arr.length; i ++) {

    // Initialise an entry in the array if one does not exist
    if(dictionary[arr[i]] === undefined) {

      // If the element is an integer increment and int counter
      if(Number.isInteger(arr[i])) {

        dictionary[arr[i]] = {
          ints: 1
        };
      } else {

        // Otherwise increment a string counter
        dictionary[arr[i]] = {
          strings: 1
        };
      }
    } else {

      // If there is already an entry in the array just increment the respective counters
      if(Number.isInteger(arr[i])) {

        // Check if the int counter has been initialised yet
        if(dictionary[arr[i]].ints === undefined) {

          dictionary[arr[i]].ints = 1;
        } else {

          dictionary[arr[i]].ints += 1;
        }
      } else {

        // Check if the string counter has been initialised yet
        if(dictionary[arr[i]].strings === undefined) {

          dictionary[arr[i]].strings = 1;
        } else {

          dictionary[arr[i]].strings += 1;
        }
      }
    }
  }

  // Define holders for the highests values and their occurrences
  let highest = [];
  let highestCount = 0;
  
  // Loop through the associative array
  for(let key in dictionary) {

    // Check if the current count is higher than the highest for int elements
    if(dictionary[key].ints > highestCount) {

      // Reset array
      highest = [];

      // Push current highest element onto the array
      highest.push(parseInt(key));

      // Set highestCount to the new highest count
      highestCount = dictionary[key].ints;
    } else if(dictionary[key].ints === highestCount) {

      // If the current count is equal to the highest, add that element to the highest array
      highest.push(parseInt(key));
    }

    // Do the same as above but for the string elements
    if(dictionary[key].strings > highestCount) {

      highest = [];
      highest.push(key);
      highestCount = dictionary[key].strings;
    } else if(dictionary[key].strings === highestCount) {
      
      highest.push(key);
    }
  }

  return highest;
};

// Export the module
module.exports = occurrenceFunc;
