/**
 * Exercise 6
 * for-of with index: Use a for-of loop to print to the console each element of
 * the array and its position (index): let noms = ['Anna', 'Bernat', 'Clara']
 */

export function printArrayAndIndex(array) {
  for (const [index, element] of array.entries()) {
    console.log(`name: ${element}, index: ${index}`);
  }
}
