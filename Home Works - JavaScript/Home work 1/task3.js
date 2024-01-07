// DONE

function FindNB(m) { 
	let n = 1;
	let sum = 0;

	while(sum < m) {
		sum = sum + Math.pow(n,3);
		if (sum === m) {
			return n;
		}
		n++;
	}
	return -1;

}

console.log(FindNB(1071225));