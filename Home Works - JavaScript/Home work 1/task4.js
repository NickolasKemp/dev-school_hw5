// Done
function isPrimeNumber(number) {
	if (typeof number === "string") {
		return false;
	}

	if (number <= 1 ) {
		return false;
	}

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}  
		
	}
	return true;
}

console.log(isPrimeNumber(17));