//Done

function changeOrder(number) {
	const numberToString = String(number);

	const splitString = numberToString.split('');

	console.log(splitString);

	const sortSplitedString = splitString.sort((a,b) => b - a);

	const joinSortedString = sortSplitedString.join('');

	const result = parseInt(joinSortedString,10);

	return result;
}

console.log(changeOrder(42145))