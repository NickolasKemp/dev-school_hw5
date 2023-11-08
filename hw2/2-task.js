const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maxHonor(arr, d) {
  const n = arr.length;
  if (n === 0) return 0;

  const completeIterations = n / d;
  let singleIterationSum = 0;
  for (let i = 0; i < d; i++) {
    singleIterationSum += arr[i];
  }
  if (singleIterationSum < 0) return 0;
  return completeIterations * singleIterationSum;
}

rl.question("Enter an array of numbers (comma-separated): ", (input) => {
  const arr = input.split(",").map(Number);

  rl.question("Enter a value for 'd': ", (dInput) => {
    const d = Number(dInput);
    const result = maxHonor(arr, d);

    console.log(`Maximum Honor: ${result}`);
    rl.close();
  });
});
