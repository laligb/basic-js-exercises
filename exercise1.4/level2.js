/**
 * Exercise 3
 * Copying objects with Spread: Create an object 'object1'. It then creates a
 * second object, 'object2', which is a copy of 'object1' using the spread
 * operator. Change a property of 'object2' and check that 'object1'
 * has not changed.
 */

// Create an Object
export const object1 = { name: "object 1" };
export const object2 = { ...object1 };

/**
 * Exercise 4
 * Rest in Destructuring: Create an array with several elements.
 * It uses destructuring and the remainder operator to assign the first two
 * elements to variables, and then assigns the rest of the elements to a third
 * variable.
 */
export function useRestDestructor(array) {
  const [first, second, ...third] = array;

  console.log(`First: ${first}, Second: ${second}, Third: ${third}`);
}

// check
