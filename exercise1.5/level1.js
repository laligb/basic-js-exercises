/**
 * Exercise 1
 * Map: You have an array of numbers [1, 2, 3, 4]. Create a new array containing
 * the square of each number.
 */
let numbers = [1, 2, 3, 4];
export const squares = numbers.map((num) => num * num);

/**
 * Exercise 2
 * Filter: You have an array of numbers [1, 2, 3, 4]. Create a new array
 * containing only the even numbers.
 */
export const onlyEven = numbers.filter((n) => n % 2 == 0);

/**
 * Exercise 3
 * Find: You have an array of numbers [1, 10, 8, 11]. Use the find function
 * to find the first number that is greater than 10.
 */
let numbers1 = [1, 10, 8, 11];
export const findFirstNumb = numbers1.find((n) => n > 10);

/**
 * Exercise 4
 * Reduce: You have an array of numbers [13, 7, 8, 21]. Use the reduce function to
 * calculate the total sum of the numbers.
 */
let numbers2 = [13, 7, 8, 21];
export const totalSum = numbers2.reduce((total, n) => total + n, 0);
