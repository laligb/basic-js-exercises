/**
 * Exercise 6
 * Every / Some: Use every and some to determine if all or some of the elements
 * in the array [11, 12, 13, 14] are greater than 10, respectively
 */
let numbers = [11, 12, 13, 14];
export const checkEvery = numbers.every((n) => n > 10);
export const checkSome = numbers.some((n) => n > 10);
