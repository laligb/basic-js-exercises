/**
 * Exercise 3
 * Using callbacks in asynchronous functions: Write a waitISHello function that
 * accepts two parameters: a name and a callback function. The function must
 * wait 2 seconds and then invoke the callback function, passing the name as a
 * paramete
 */
export const waitIsHello = (name, callback) => {
  setTimeout(() => {
    console.log(callback(name));
  }, 2000);
};
/**
 * Exercise 4
 * Callbacks with arrays: Write a function processarElements that accepts two
 * parameters: an array and a callback function. The processElements function
 * must call the callback function for each element in the array.
 */
export function processarElements(array, callback) {
  array.forEach((element) => {
    console.log(callback(element));
  });
}
