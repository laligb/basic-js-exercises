/**
 * Exercise 1
 * Basic Callback: Write a function called process that accepts two parameters:
 * a number and a callback function. The process function must call the callback
 * function, passing the number as a parameter.
 */

// The process function
export function checkCallbackProcess() {
  function process(number, callback) {
    console.log(`Callback process for ${number}: ` + callback(number));
  }
  const myCallback = (n) => n;
  process(12, myCallback);
}

/**
 * Exercise 2
 * Callbacks with math operations: Write a calculator function that accepts
 * three parameters: two numbers and a callback function. The calculator
 * function must call the callback function with the two numbers as parameters.
 * Then, call calculator with a function that adds the two numbers.
 */
export function checkCalculatorCallback() {
  function calculator(num1, num2, callback) {
    console.log(`Callback calculator: ${num1}+${num2}=` + callback(num1, num2));
  }

  const addNumsCallback = (n1, n2) => n1 + n2;
  calculator(1, 7, addNumsCallback);
}
