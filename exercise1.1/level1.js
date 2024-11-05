/**  Exercise 1:
 * Function conversion: You have an add function that accepts
 * two parameters and returns their sum. Convert it to an arrow function.
 * For example:function add(a, b) {return a + b;}. */

export function add(a, b) {
  return a + b;
}

/**
 * Exercise 2:
 * Arrow function with no parameters: Creates an arrow function
 * named randomNumber that takes no parameters and returns a random number
 * between 0 and 100.
 */
const randomNumber = () => Math.random(0, 100);
export { randomNumber };

/**
 * Exercise 3:
 * Using 'this' in arrow functions: Create a person class that has a name
 * property and a greet function that uses an arrow function. The function
 * should print a greeting that includes the person's name. For example:
 * console.log(Hola, ${this.name});.
 */
class Person {
  constructor(name, property) {
    this.name = name;
    this.property = property;
  }

  greet = () => console.log(`Hola, ${this.name}`);
}
export { Person };
