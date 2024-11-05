/**
 * Exercise 5
 * Write a processString function that accepts two parameters: a character
 * string and a callback function. The processString function must convert the
 * string to uppercase and then call the callback function with the transformed
 * string.
 */

export function processString(charString, callback) {
  let transformed = charString.toUpperCase();
  callback(transformed);
}
