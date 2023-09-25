function lengthOrSquare(value: string | number) {
    if (typeof value === 'string') {
      return value.length;
    } else if (typeof value === 'number') {
      return value * value;
    }
  }

  const userInput = prompt("Enter a value as either a string or a number:");
  const parsedValue = isNaN(Number(userInput)) ? userInput : Number(userInput);
  const result = lengthOrSquare(parsedValue);

  console.log(typeof result);
  console.log(result);
