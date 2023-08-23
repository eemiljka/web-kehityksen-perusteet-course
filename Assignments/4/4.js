'use strict';

let score = prompt('Enter your score:');
score = parseFloat(score);

if (!isNaN(score) && score >= 0 && score <= 39) {
  let grade = 0;
  let output = document.getElementById('number');
  output.innerHTML = grade;
}

if (!isNaN(score) && score >= 40 && score <= 51) {
  let grade = 1;
  let output = document.getElementById('number');
  output.innerHTML = grade;
}

if (!isNaN(score) && score >= 52 && score <= 63) {
  let grade = 2;
  let output = document.getElementById('number');
  output.innerHTML = grade;
}

if (!isNaN(score) && score >= 64 && score <= 75) {
  let grade = 3;
  let output = document.getElementById('number');
  output.innerHTML = grade;
}

if (!isNaN(score) && score >= 76 && score <= 87) {
  let grade = 4;
  let output = document.getElementById('number');
  output.innerHTML = grade;
}

if (!isNaN(score) && score >= 88 && score <= 100) {
  let grade = 5;
  let output = document.getElementById('number');
  output.innerHTML = grade;
}
