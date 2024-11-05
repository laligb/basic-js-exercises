// main.js
const { exec } = require("child_process");
const path = require("path");

// List of exercises to run
const exercises = [
  "exercise1.1/main.js",
  "exercise1.2/main.js",
  "exercise1.3/main.js",
  "exercise1.4/main.js",
  "exercise1.5/main.js",
  "exercise1.6/main.js",
  "exercise1.7/main.js",
];

// Function to run each exercise
const runExercises = () => {
  exercises.forEach((exercise) => {
    const exercisePath = path.join(__dirname, exercise); // Create absolute path
    exec(`node ${exercisePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing ${exercise}: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error output for ${exercise}: ${stderr}`);
        return;
      }
      console.log(`Output of ${exercise}:\n${stdout}`);
    });
  });
};

// Run the exercises
runExercises();
