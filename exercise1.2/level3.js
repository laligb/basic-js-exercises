/**
 * Exercise 4
 * Ternary operator inside a loop: Write a parOImpar function that accepts an
 * array of numbers and uses a loop to iterate through the array. Inside the
 * loop, use the ternary operator to determine whether each number is even or
 * odd.
 */

export const parOImpar = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 === 0 ? console.log("Even") : console.log("Odd");
  }
};
