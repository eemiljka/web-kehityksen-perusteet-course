'use strict';

let student2 = {
  firstName: 'Ahmed',
  lastName: 'Hussein',
  credits: 175,
  hasLeft: function () {
    return 240 - this.credits;
  },
};

console.log(
  'Student ' +
    student2.firstName +
    ' is missing ' +
    student2.hasLeft() +
    ' credits.'
);
