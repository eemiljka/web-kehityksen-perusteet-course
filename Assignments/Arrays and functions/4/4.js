'use strict';

function sortArray(numbers) {
  return numbers.sort(function (a, b) {
    return a - b;
  });
}

const inputArray = [3, 8, 1, 5, 2, 4, 7, 6];
console.log('Original Array:' + inputArray);

const sortedArray = sortArray(inputArray);
console.log('Sorted Array:' + sortedArray);
