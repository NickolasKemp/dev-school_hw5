// Done

function unpackSausages(truck) {
	let undamagetCount = 0;
	let displayCounter = "";

	truck.forEach(box => {
		box.forEach(package => {

			let match = package.match(/^\[([^\]])\1*\]$/);

			if (match) {
				undamagetCount++;
				let sausages = match[1].repeat(package.length - 2);
				if (undamagetCount % 5 === 0) {
					console.log(`sausages for reward: ${sausages}`);

				} else {
					console.log(`sausages: ${sausages} ${undamagetCount}`);
					displayCounter = displayCounter + sausages;
				}

			}

		});
	});

	console.log(`${displayCounter.split("").join(" ")}`);

	return;
}

let input = [["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], ["[@@@@]", "UwU",
	"[IlII]"], ["IuI", "[))))]", "x"], []];

unpackSausages(input);