/**
 * Exercise 1
 * Basic Ternary Operator: Write a canDriv function that accepts age as a
 * parameter and uses the ternary operator to determine whether the user can
 * drive. If the age is 18 or over, it should return 'You can drive'. If not,
 * it should return 'You cannot drive'.
 */

export const canDriv = (age) =>
  age >= 18 ? "You can drive" : "You cannot drive";

/**
 * Exercise 2
 * Using Comparison Operators: Write an expression that uses the ternary operator
 * to determine which of the two given numbers (num1 and num2) is greater.
 * If num1 is greater, return 'num1 is greater'. If not, return 'num2 is greater'.
 */
export const comparison = (num1, num2) =>
  num1 > num2 ? `${num1} is greater` : `${num2}  is greater`;
