/**
 * Exercise 6
 * Promise.all: Creates two promises that resolve after 2 and 3 seconds
 * respectively. Use Promise.all to wait for both promises to resolve,
 * and print the results to the console.
 */

const myPromise1 = new Promise((resolve) => {
  setTimeout(resolve("Hello, promise with 2 seconds ", 2000));
});

const myPromise2 = new Promise((resolve) => {
  setTimeout(resolve("Hello, promise with 3 seconds ", 3000));
});

export function promiseAllFun() {
  Promise.all([myPromise1, myPromise2]).then((result) => {
    console.log(result);
  });
}
