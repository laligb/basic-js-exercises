/**
 * Exercise 3
 * Linked Use of Ternary Operators: Write an expression that uses links of
 * ternary operators to determine whether a number is positive, negative, or zero.

 * Ternary operator with functions: Creates a findMaximum function that accepts
 * three parameters (a, b, c) and uses the ternary operator to determine the
 * maximum value.
 */

export const checkNumb = (num) =>
  num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
export const findMaximum = (a, b, c) =>
  a > b ? (a > c ? a : c) : b > c ? b : c;
