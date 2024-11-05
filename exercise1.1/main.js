import { add, randomNumber, Person } from "./level1.js";
import { printNumbers } from "./level2.js";

// Testing Level 1
console.log(add(2, 3));
console.log(randomNumber());

const newPerson = new Person("Maria", "some property");
newPerson.greet();

// Testing Level 2
let numbers = [32, 44, 55, 14, 3, 5, 66, 87, 1];
printNumbers(numbers);
