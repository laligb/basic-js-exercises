/**
 * Exercise 1.4: Rest & Spread operators
 */
import { usingRest, usingSpread } from "./level1.js";
import { object1, object2, useRestDestructor } from "./level2.js";
import { objectS1, objectS2, spreadFunc } from "./level3.js";

// Testing Level 1
let array1 = [2, 4, 1];
let array2 = [56, 3, 8];

console.log(usingSpread(array1, array2));
console.log(usingRest(1, 2, 3, 4));

// Testing Level 2
console.log(object1, object2);

let array3 = [3, 4, 2, 9, 5, 6, 2, 9, 11, 0, 2];
useRestDestructor(array3);

// Testing Level 3
let array4 = [3, 5, 6];
spreadFunc(...array4);

console.log({ ...objectS1, ...objectS2 });
