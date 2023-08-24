'use strict';

const number = +prompt('Enter a natural number:');
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i;
}

document.getElementById('target').innerHTML = sum;
