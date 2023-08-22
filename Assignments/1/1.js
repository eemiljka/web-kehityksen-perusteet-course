'use strict';

let givenTemperature = prompt('Enter a temperature in cesius:');
let givenInt = parseInt(givenTemperature);

let fahrenheit = givenInt * 1.8 + 32;
let kelvin = givenInt + 273.15;

let output = document.getElementById('header');
let output1 = document.getElementById('fahrenheit');
let output2 = document.getElementById('kelvin');

output.innerHTML = givenTemperature + ' °C is:';
output1.innerHTML = fahrenheit + ' °F';
output2.innerHTML = kelvin + ' K';
