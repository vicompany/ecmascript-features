class Color {
	constructor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	toString() {
		const value = this.toValue();
		const hex = value.toString(16).padStart(6, '0');

		return `#${hex}`;
	}

	toValue() {
		// eslint-disable-next-line no-bitwise
		return (this.r << 16) | (this.g << 8) | this.b;
	}

	[Symbol.toPrimitive](hint) {
		if (hint === 'number') {
			return this.toValue();
		}

		if (hint === 'string') {
			return this.toString();
		}

		return 'very pretty color';
	}
}

module.exports = () => {
	const color = new Color(0, 127, 255);

	// eslint-disable-next-line prefer-template
	console.log('Color with default hint:', '=> ' + color + ' <=');
	console.log('Color with number hint: ', +color);
	console.log(`Color with string hint:  ${color}`);
};
