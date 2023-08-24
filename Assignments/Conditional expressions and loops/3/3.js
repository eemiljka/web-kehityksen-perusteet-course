'use strict';

const firstSide = +prompt('Give first length of sides (1/3):');
const secondSide = +prompt('Give second length of sides (2/3):');
const thirdSide = +prompt('Give third length of sides (3/3):');

const equilateral = 'Equilateral. All sides are equal';
const isosceles = 'Isosceles. Two sides are equal';
const scalene = 'Scalene. No sides are equal';

if (firstSide == secondSide && firstSide == thirdSide) {
  document.getElementById('target').innerHTML = equilateral;
}

if (firstSide === secondSide) {
  if (secondSide != thirdSide) {
    document.getElementById('target').innerHTML = isosceles;
  }
}
if (secondSide === thirdSide) {
  if (thirdSide != firstSide) {
    document.getElementById('target').innerHTML = isosceles;
  }
}
if (thirdSide === firstSide) {
  if (firstSide != secondSide) {
    document.getElementById('target').innerHTML = isosceles;
  }
}

if (firstSide != secondSide && firstSide != thirdSide) {
  if (secondSide != thirdSide) {
    document.getElementById('target').innerHTML = scalene;
  }
}
