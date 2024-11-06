/**
 * Arrow functions
 */

import { add, randomNumber, Person, addArrow } from "./level1.js";
import { printNumbers } from "./level2.js";
import { runTimeout } from "./level3.js";

// Testing Level 1
console.log("Exercise 1.1 level 1: ");
console.log("2+3=" + add(2, 3));
console.log("7+1=" + addArrow(7, 1));
console.log("Return random=" + randomNumber());

const newPerson = new Person("Maria", "some property");
newPerson.greet();

// Testing Level 2
console.log("\nExercise 1.1 level 2: ");
let numbers = [32, 44, 55, 14, 3, 5, 66, 87, 1];
printNumbers(numbers);

// Testing Level 3
console.log("\nExercise 1.1 level 3: ");
runTimeout();
