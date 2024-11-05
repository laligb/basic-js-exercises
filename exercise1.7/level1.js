/**
 * Exercise 1
 * Creating a Promise: Creates a promise that resolves after 2 seconds and
 * returns the text string 'Hello, world'.
 */
const helloPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, world");
  }, 2000);
});
/**
 * Exercise 2
 * Use of a Promise: Use the promise created in the previous exercise. Create a
 * .then that prints the result to the console.
 */
export function usePromise() {
  helloPromise.then((msg) => console.log(msg));
}
/**
 * Exercise 3
 * Promise with reject: Creates a promise that resolves after 2 seconds if the
 * input equals 'Hello', and rejects it if the input is anything else.
 */
export function helloWithReject(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === "Hello") {
        resolve("Hello");
      } else {
        reject("Input must be 'Hello'");
      }
    }, 2000);
  });
}

/**
 * Exercise 4
 * Using async/await: Write an asynchronous function that uses the await
 * function to wait for the result of the promise created in Exercise 1, and
 * then prints that result to the console.
 */
export async function asyncUsePromise() {
  try {
    const result = await helloPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
