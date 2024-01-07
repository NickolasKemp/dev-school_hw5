//Done
function HighAndLow(mass) {
	if(mass.length === 0) {
		return "The mass is empty";
	}

	let high = mass[0];
	let low = mass[0];

	for(let i = 0; i < mass.length; i++) {
		if (high < mass[i]) {
			high = mass[i];
		}

		if (low > mass[i]) {
			low = mass[i];
		}
	}

	let res = []
	res[0] = high;
	res[1] = low;
	return res;
	// return `${high} ${low}`;
}
const numbers = [4, 2, -7, 1, 9, 5];
console.log(HighAndLow(numbers))