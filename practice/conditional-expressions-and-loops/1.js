'use strict';

const celsius = parseFloat(prompt('Enter celsius: '));
const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.getElementById(
  'fahrenheit'
).innerHTML = `${celsius} celsius is ${fahrenheit} F in fahrenheit`;

document.getElementById(
  'kelvin'
).innerHTML = `${celsius} celsius is ${kelvin} K in kelvin`;
