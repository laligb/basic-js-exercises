/**
 * Exercise 4:
 * Arrow function inside a loop: Create a function called printNumbers that
 * accepts an array of numbers and uses a for loop to print each number to
 * the console using an arrow function.
 */

const printNumbers = (arrayOfNumbers) => {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
  }
};

export { printNumbers };
