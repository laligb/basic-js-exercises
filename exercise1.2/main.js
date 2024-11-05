/**
 * Exercise 1.2: Ternary operator
 */
import { canDriv, comparison } from "./level1.js";
import { checkNumb, findMaximum } from "./level2.js";
import { parOImpar } from "./level3.js";

// Testing Level 1
console.log("\nExercise 1.2 level 1: ");
console.log(canDriv(13));
console.log(canDriv(34));

console.log(comparison(24, 78));
console.log(comparison(24, 5));

// Testing Level 2
console.log("\nExercise 1.2 level 2: ");
console.log(checkNumb(0));
console.log(checkNumb(33));
console.log(checkNumb(-9));

console.log(findMaximum(3, 6, 2));

// Testing Level 3
console.log("\nExercise 1.2 level 3: ");
parOImpar([34, 5, 0, -5, 3, 89, 100, 33, 56, 7]);
