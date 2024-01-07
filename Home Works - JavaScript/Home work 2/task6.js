// Done

function calculatePerimeter(arr) {
	let perimeterSum = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {

			if (arr[i][j] === 'X') {

				if (i === 0 || arr[i - 1][j] === 'O') {
					perimeterSum++;
				}

				if (i === arr.length - 1 || arr[i + 1][j] === 'O') {
					perimeterSum++;
				}

				if (j === 0 || arr[i][j - 1] === 'O') {
					perimeterSum++;
				}

				if (j === arr[i].length - 1 || arr[i][j + 1] === 'O') {
					perimeterSum++;
				}
			}
		}
	}

	return perimeterSum;
}


const area = ['XOOO',
	'XOXO',
	'XOXO',
	'OOXX',
	'OOOO']
console.log(calculatePerimeter(area));