'use strict';

const naturalNumber = prompt('Enter a positive integer:');
const naturalnumberInt = parseInt(naturalNumber);

for (let i = 1; i <= naturalnumberInt; i++) {
  for (let j = 1; j <= naturalnumberInt; j++) {
    let output = i * j;
    document.getElementById('target').innerHTML =
      i + ' x ' + j + ' = ' + output;
    console.log(i + ' x ' + j + ' = ' + output);
  }
}
