const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findNb(m) {
  let n = 1;
  let sumOfCubes = 1;

  while (sumOfCubes < m) {
    n++;
    sumOfCubes += Math.pow(n, 3);
  }

  if (sumOfCubes === m) {
    return n;
  } else {
    return -1;
  }
}

rl.question("Enter the total volume of the building: ", (input) => {
  const totalVolume = parseInt(input);
  if (!isNaN(totalVolume) && totalVolume >= 1) {
    const n = findNb(totalVolume);
    if (n !== -1) {
      console.log(`The number of cubes needed to build a building with a volume of ${totalVolume} is: ${n}`);
    } else {
      console.log("No such number of cubes exists.");
    }
  } else {
    console.log("Please enter positive integer for the total volume.");
  }
  rl.close();
});
