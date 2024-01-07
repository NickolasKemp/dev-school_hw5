//Done

function calculateMoves(number_of_disks) {
	return Math.pow(2, number_of_disks) - 1
}

console.log(calculateMoves(3))