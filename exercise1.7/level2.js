/**
 * Exercise 5
 * Error handling with async/await: Modify the function in Exercise 4 to catch
 * any possible errors using a try/catch block.
 */

export async function asyncUsePromiseWithCatch(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
