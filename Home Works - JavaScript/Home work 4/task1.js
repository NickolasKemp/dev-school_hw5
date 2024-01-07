class SecureAndTranslate {

	constructor(key, alphabet) {
		this.key = key;
		this.alphabet = alphabet;
	}

	encode(message) {
		return this.translate(message, 'encode');
	}

	decode(message) {
		return this.translate(message, 'decode');
	}

	translate(message, operation) {
		const result = [];
		const keyLength = this.key.length;
		const alphabetLenght = this.alphabet.length;

		for (let i = 0;i < message.length; i++) {
			const char = message[i];

			if (this.alphabet.includes(char)) {
				const  keyChar = this.key[i % keyLength];
				const shift = operation === 'encode' ? this.alphabet.indexOf(keyChar) : alphabetLenght - this.alphabet.indexOf(keyChar);
				const newIndex = (this.alphabet.indexOf(char) + shift) % alphabetLenght;
				result.push(this.alphabet[newIndex]);
			} else {
				result.push(char);
			}

			
		}
		return result.join('');
	}

};

// const alphabet = ;
// const key = ;


const myObj = new SecureAndTranslate('password', 'abcdefghijklmnopqrstuvwxyz');

console.log(myObj.encode('Nice'));