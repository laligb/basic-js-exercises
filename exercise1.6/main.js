/**
 * Exercise 1.6: Array loops
 */

import { printNames, useFilter, useForOf } from "./level1.js";
import { useBreak, useForIn } from "./level2.js";

// Testing Level 1
let names = ["Anna", "Bernat", "Clara"];
printNames(names);
useForOf(names);
let numbers = [1, 2, 3, 4, 5, 6];
console.log(useFilter(numbers));

// Testing Level 2
let obj = { name: "Ona", age: 25, city: "Barcelona" };
useForIn(obj);

useBreak(numbers);
