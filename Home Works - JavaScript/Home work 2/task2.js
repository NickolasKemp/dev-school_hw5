// Done
function findAppropriateIndex(mass) {
	for(let i = 0; i < mass.length; i++) {
		const sliceLeft = mass.slice(0, i);
		const sliceRight = mass.slice(i + 1);  
		
		const sumLeft = sliceLeft.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0)

		const sumRight = sliceRight.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0)
		
		if( sumLeft === sumRight) {
			return i;
		}

		
	}
	return -1;
}
const numbers = [50, -51, 1 , 1];
console.log(findAppropriateIndex(numbers));