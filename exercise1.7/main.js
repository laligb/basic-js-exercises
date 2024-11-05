/**
 * Exercise 1.7: Promises & Async/Await
 */
import {
  asyncUsePromise,
  helloPromise,
  helloWithReject,
  usePromise,
} from "./level1.js";
import { asyncUsePromiseWithCatch } from "./level2.js";

// Testing Level 1
usePromise();

helloWithReject("Hello")
  .then((message) => console.log("Resolved:", message))
  .catch((error) => console.log("Rejected:", error));

helloWithReject("H")
  .then((message) => console.log("Resolved:", message))
  .catch((error) => console.log("Rejected:", error));

console.log("\nAsynchronous function: ");
asyncUsePromise(helloPromise);
asyncUsePromiseWithCatch(helloPromise);
