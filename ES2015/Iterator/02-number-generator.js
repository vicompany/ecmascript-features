/* eslint-disable max-classes-per-file */
class Mathf {
	static mix(a, b, t) {
		return a + (t * (b - a));
	}
}

class InstrumentPriceGenerator {
	constructor(base = 100, count = 365) {
		this._count = count;
		this._index = 0;
		this._price = base;
	}

	next() {
		this._index++;
		this._price += Mathf.mix(-1, 1, Math.random());

		return {
			done: this._index === this._count,
			value: this._price,
		};
	}

	[Symbol.iterator]() {
		return this;
	}
}

module.exports = () => {
	const generator1 = new InstrumentPriceGenerator(100, 10);
	const generator2 = new InstrumentPriceGenerator(100, 4);

	for (const price of generator1) {
		console.log(price);
	}

	console.log('Array.from(generator) ==', Array.from(generator2));
};
