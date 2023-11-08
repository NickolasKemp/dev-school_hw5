const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maxHonor(arr, d) {
  const n = arr.length;
  let maxSum = -Infinity;

  for (let i = 0; i < n; i++) {
    let currentSum = 0;

    for (let j = 0; j < d; j++) {
      currentSum += arr[(i + j) % n];
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

rl.question("Enter the honor values separated by spaces: ", (input) => {
  const honorValues = input.split(" ").map((str) => parseInt(str));
  rl.question("Enter the number of leaders (d): ", (dInput) => {
    const leaders = parseInt(dInput);
    if (!isNaN(leaders) && leaders >= 1 && leaders <= 31) {
      const combinedHonor = maxHonor(honorValues, leaders);
      console.log(`Combined honor of the ${leaders} leaders: ${combinedHonor}`);
    } else {
      console.log("Please enter a valid number of leaders (1 to 31).");
    }
    rl.close();
  });
});
