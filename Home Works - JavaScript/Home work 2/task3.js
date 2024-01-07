//Done

function groupAnagrams(words) {

	const anagramsGroups = {};

	function sortWords(word) {
		return word.split('').sort().join('');
	}

	words.forEach(word => {
		
		const sortedWord = sortWords(word);

		if(anagramsGroups[sortedWord]) {
			anagramsGroups[sortedWord].push(word);
		} else {
			anagramsGroups[sortedWord] = [word];
		}
	}); 

	return result = Object.values(anagramsGroups);
}

const input = ["tsar", "rat", "tar", "star", "tars", "cheese"]

console.log(groupAnagrams(input));