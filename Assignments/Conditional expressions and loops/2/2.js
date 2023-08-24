'use strict';

const firstCoordinateX = +prompt('Enter the first X-coordinate:');
const firsttCoordinateY = +prompt('Enter the first Y-coordinate:');
const secondCoordinateX = +prompt('Enter the second X-coordinate:');
const secondCoordinateY = +prompt('Enter the second Y-coordinate:');

const distance = Math.sqrt(
  Math.pow(secondCoordinateX - firstCoordinateX, 2) +
    Math.pow(secondCoordinateY - firsttCoordinateY, 2)
);

document.getElementById('target').innerHTML = distance;
