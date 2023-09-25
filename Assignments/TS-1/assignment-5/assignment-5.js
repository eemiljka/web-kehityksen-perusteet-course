function lengthOrSquare(value) {
  if (typeof value === 'string') {
    return value.length;
  } else if (typeof value === 'number') {
    return value * value;
  }
}
var userInput = prompt('Enter a value as either a string or a number:');
var parsedValue = isNaN(Number(userInput)) ? userInput : Number(userInput);
var result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
