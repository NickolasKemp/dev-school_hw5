const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function towersOfHanoiMoves(disks) {
  if (disks === 1) {
    return 1;
  } else {
    const movesStep1 = towersOfHanoiMoves(disks - 1);
    const movesStep2 = 1;
    const movesStep3 = towersOfHanoiMoves(disks - 1);
    return movesStep1 + movesStep2 + movesStep3;
  }
}

rl.question("Enter the number of disks: ", (input) => {
  const numberOfDisks = parseInt(input);
  if (!isNaN(numberOfDisks) && numberOfDisks > 0) {
    const moves = towersOfHanoiMoves(numberOfDisks);
    console.log(`Minimum number of moves to solve Towers of Hanoi with ${numberOfDisks} disks: ${moves}`);
  } else {
    console.log("Please enter positive integer.");
  }
  rl.close();
});
