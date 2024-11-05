/**
 * Exercise 1.3: Callbacks
 */
import { process, calculator } from "./level1.js";
import { waitIsHello, processarElements } from "./level2.js";
import { processString } from "./level3.js";

// Testing Level 1
console.log("\nExercise 1.3 level 1: ");
const myCallback = (n) => n;
process(12, myCallback);

const addNumsCallback = (n1, n2) => n1 + n2;
calculator(1, 7, addNumsCallback);

// Testing Level 2
console.log("\nExercise 1.3 level 2: ");
const sayHello = (name) => `Hello, ${name}`;
waitIsHello("David", sayHello);

let myArray = [1, 3, 4, 6, 2, 8, 9, 0, 2];
const powerCallback = (n) => n ** 2;
processarElements(myArray, powerCallback);

const printCallback = (someString) => console.log(someString);

// Testing Level 3
console.log("\nExercise 1.3 level 3: ");
processString("Hello my name is Lali", printCallback);
