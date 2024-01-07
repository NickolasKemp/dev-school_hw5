// Done (revise later)

function getRootProperty(obj, targetValue) {
	function searchProperty(obj, targetValue, currentProperty) {

		for (const property in obj) {
			if(Array.isArray(obj[property]) && obj[property].includes(targetValue)) {
				return currentProperty;
			} else if (typeof obj[property] === 'object') {
				const result = searchProperty(obj[property], targetValue, property);

				if (result) {
					return result;
				}
			}
		}
		return null;

	}

	return searchProperty(obj, targetValue, null);
}


const object1 = {
	"one": {
		"nest1": {
			"val1": [9, 34, 92, 100]
		}
	},
	"2f7": {
		"n1": [10, 92, 53, 71],
		"n2": [82, 34, 6, 19]
	}
};

console.log(getRootProperty(object1, 34));