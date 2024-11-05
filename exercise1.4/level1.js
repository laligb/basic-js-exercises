/**
 * Exercise 1
 * Spread operator in Arrays: Creates two arrays, array1 and array2.
 * Use the spread operator to create a third array containing all the elements
 * of array1 and array2.
 */

export function usingSpread(array1, array2) {
  return [...array1, ...array2];
}

/**
 * Exercise 2
 * Rest Operator in Functions: Create a 'sum' function that uses the rest
 * operator to accept an indeterminate number of arguments and return their sum.
 */
export function usingRest(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
