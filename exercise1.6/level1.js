/**
 * Exercise 1
 * forEach: You have an array of names. Use forEach to print each name to the
 * console: let names = ['Anna', 'Bernat', 'Clara'];
 */
export function printNames(names) {
  names.forEach((element) => {
    console.log(element);
  });
}

/**
 * Exercise 2
 * for-of: You have an array of names. Use a for-of loop to print each name to
 * the console: let names = ['Anna', 'Bernat', 'Clara'];
 */
export function useForOf(names) {
  for (const element of names) {
    console.log(element);
  }
}

/**
 * Exercise 3
 * filter: You have an array of numbers. Use filter to create a new array
 * containing only the even numbers. let numbers = [1, 2, 3, 4, 5, 6];
 */
export function useFilter(numbers) {
  return numbers.filter((n) => n % 2 == 0);
}
