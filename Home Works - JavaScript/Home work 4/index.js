// // task 2 done
// function Calculator(a,b) {
// 	this.a = a;
// 	this.b = b; 

// 	this.read = function() {
// 		a = prompt("Введіть числo a:");
// 		b = prompt("Введіть числo b:");
// 	};

// 	this.sum = function() {
// 		return +a + +b;
// 	}

// 	this.mul = function() {
// 		return a * b;
// 	}

// }

// let calculator = new Calculator();

// calculator.read();

// console.log("Sum = " + calculator.sum());

// console.log(calculator.mul());



// task 3 

function Accumulator(startingValue) {

	this.value = startingValue;

	this.read = function () {
		this.value = this.value + +prompt("Введіть значення для додавання:")
	}

}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);