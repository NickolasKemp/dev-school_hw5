const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}
rl.question("Enter an integer to check if it's prime: ", (input) => {
  const number = parseInt(input);
  if (!isNaN(number)) {
    const isPrimeResult = isPrime(number);
    if (isPrimeResult) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is not a prime number.`);
    }
  } else {
    console.log("Please enter a valid integer.");
  }
  rl.close();
});
