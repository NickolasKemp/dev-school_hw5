const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ...

rl.question("Enter a number: ", (input) => {
  // ...
  rl.close();
});
