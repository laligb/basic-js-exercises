/**
 * Exercise 1.6: Array loops
 */

import { printNames, useFilter, useForOf } from "./level1.js";
import { useBreak, useForIn } from "./level2.js";
import { printArrayAndIndex } from "./level3.js";

// Testing Level 1
console.log("\nExercise 1.6 level 1: ");
let names = ["Anna", "Bernat", "Clara"];
console.log("Print names: ");
printNames(names);
console.log("Use for names: ");
useForOf(names);

console.log("Use filter for even numbers:");
let numbers = [1, 2, 3, 4, 5, 6];
console.log(useFilter(numbers));

// Testing Level 2
console.log("\nExercise 1.6 level 2: ");
let obj = { name: "Ona", age: 25, city: "Barcelona" };
console.log("For-in for objects: ");
useForIn(obj);

console.log("Break for numbers:");
useBreak(numbers);

// Testing Level 3
console.log("\nExercise 1.6 level 3: ");
let noms = ["Anna", "Bernat", "Clara"];
printArrayAndIndex(noms);
