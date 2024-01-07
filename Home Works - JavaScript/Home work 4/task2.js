// Done

class Vector {
	constructor (components) {
		this.components = components;

	}

	add (otherVector) {
			if(this.components.length !== otherVector.components.length) {
				throw new Error("Vectors are not the same size")
			} 

			const result = this.components.map((value, index) => value + otherVector.components[index]);
			return  new Vector(result);
	
	}

	substract (otherVector) {
		if (this.components.length !== otherVector.components.length) {
			throw new Error("Vectors are not the same size")
		} 

		const result = this.components.map((value, index) => value - otherVector.components[index]);
		return new Vector(result);
	}

	dot (otherVector) {
		if(this.components.length !== otherVector.components.length) {
			throw new Error("Are not the same size!")
		}

		const result = this.components.map((value, index) => value * otherVector.components[index]);
		return result.reduce((ac,cur) => ac + cur);
	}

	norm() {
		
		const result = this.components.reduce((sum, value) => sum + (value * value));
		return `sqrt(${result})`;
	}
		
}

let a = new Vector([1, 2, 3,]);
let b = new Vector([1, 4 , 7]);

const res = b.norm();

console.log(res);