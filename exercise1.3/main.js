/**
 * Exercise 1.3: Callbacks
 */
import { checkCallbackProcess, checkCalculatorCallback } from "./level1.js";
import { waitIsHello, processarElements, sayHello } from "./level2.js";
import { processString } from "./level3.js";

// Testing Level 1
console.log("\nExercise 1.3 level 1: ");
checkCallbackProcess();
checkCalculatorCallback();

// Testing Level 2
console.log("\nExercise 1.3 level 2: ");
waitIsHello("David", sayHello);

let myArray = [1, 3, 4, 6, 2, 8, 9, 0, 2];
const powerCallback = (n) => n ** 2;
processarElements(myArray, powerCallback);

// Testing Level 3
console.log("\nExercise 1.3 level 3: ");
const printCallback = (someString) => console.log(someString);
processString("Hello my name is Lali", printCallback);
