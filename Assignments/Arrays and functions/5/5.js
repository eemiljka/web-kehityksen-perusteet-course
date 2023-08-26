'use strict';

function sortArray(numbers, order) {
  if (order === 'asc') {
    return numbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    return numbers.sort(function (a, b) {
      return b - a;
    });
  }
}

const inputArray = [3, 8, 1, 5, 2, 4, 7, 6];

const ascendingArray = sortArray(inputArray, 'asc');
console.log('Ascending Array:', ascendingArray);

//remove comment in order to try descending

/*const descendingArray = sortArray(inputArray, 'desc');
console.log('Descending Array:', descendingArray);*/
