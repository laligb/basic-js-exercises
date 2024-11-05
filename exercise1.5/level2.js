/**
 * Exercise 5
 * Given an array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]",
 * create a one-line function that does the following:

- Filter numbers greater than or equal to 10.

- Multiply each filtered number by 2.

- Calculates the sum of the filtered numbers and multiplied by 2.

- The function must return the result of the sum.

 */
let numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
export const oneLineFun = numbers
  .filter((n) => n >= 10)
  .map((n) => n * 2)
  .reduce((t, n) => t + n, 0);
