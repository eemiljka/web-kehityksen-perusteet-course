'use strict';

const numbers = [];

const numberOne = prompt('Enter a number: (1/5)');
numbers.push(numberOne);

const numberTwo = prompt('Enter a number: (2/5)');
numbers.push(numberTwo);

const numberThree = prompt('Enter a number: (3/5)');
numbers.push(numberThree);

const numberFour = prompt('Enter a number: (4/5)');
numbers.push(numberFour);

const numberFive = prompt('Enter a number: (5/5)');
numbers.push(numberFive);

console.log('Numbers: ' + numbers);

const isIncluded = prompt(
  'Enter a number to see if it is included in the array:'
);
console.log(numbers.includes(isIncluded));

if (numbers.includes(isIncluded) == true) {
  console.log('Number ' + isIncluded + ' is included in the array.');
}

if (numbers.includes(isIncluded) == false) {
  console.log('Number ' + isIncluded + ' is not included in the array.');
}

numbers.pop();
console.log('Updated numbers: ' + numbers);

numbers.sort(function (a, b) {
  return a - b;
});

console.log('Sorted numbers: ' + numbers);
