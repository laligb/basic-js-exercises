/**
 * Exercise 4
 * for-in: You have an object with key-value pairs:
 * let obj = { name: Ona, age: 25, city: 'Barcelona' }; Use a for-in loop to
 * print each key and its corresponding value to the console.
 */
export function useForIn(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

/**
 * Exercise 5
 * for-of with break: You have an array of numbers. Use a for-of loop to print
 * the numbers to the console until the number 5 is found, then stop the loop:
 * let numbers = [1, 2, 3, 4, 5, 6];
 */
export function useBreak(numbers) {
  for (const element of numbers) {
    if (element == 5) {
      break;
    }
    console.log(element);
  }
}
