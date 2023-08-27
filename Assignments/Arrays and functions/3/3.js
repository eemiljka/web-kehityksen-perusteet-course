'use strict';

const numbers = [];

do {
  const givenNumber = prompt('Enter a number or type "done" to stop:');
  if (givenNumber.toLowerCase() === 'done') {
    break;
  }

  const parsedNumber = parseFloat(givenNumber);

  if (!isNaN(parsedNumber)) {
    numbers.push(parsedNumber);
  } else {
    alert('Invalid output. Please enter a valid number.');
  }
} while (true);

for (const num of numbers) {
  if (num % 2 === 0) {
    const evenNumberDiv = document.createElement('div');
    evenNumberDiv.textContent = `Even number: ${num}`;
    document.body.appendChild(evenNumberDiv);
  }
}

const endMessage = document.createElement('p');
endMessage.textContent = 'End of the program.';
document.body.appendChild(endMessage);
