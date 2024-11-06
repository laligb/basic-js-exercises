/**
 * Arrow function with 'setTimeout': Create an arrow function that prints
 * a message to the console after waiting 3 seconds.
 */

const printMessageAfter3Seconds = () => console.log("Printed after 3 seconds!");
export function runTimeout() {
  setTimeout(printMessageAfter3Seconds, 3000);
}
