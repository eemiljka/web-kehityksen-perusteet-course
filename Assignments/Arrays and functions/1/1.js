'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits.length);
document.getElementById('target').innerText = fruits.length;
console.log(fruits[2]);

const lastElement = fruits[fruits.length - 1];

console.log(lastElement);

const vegetables = [];

const firstVegetable = prompt('Enter a vegetable (1/3):');
vegetables.push(firstVegetable);

const secondVegetable = prompt('Enter a vegetable (2/3):');
vegetables.push(secondVegetable);

const thirdVegetable = prompt('Enter a vegetable (3/3):');
vegetables.push(thirdVegetable);

console.log(vegetables);
console.log(vegetables.length);
