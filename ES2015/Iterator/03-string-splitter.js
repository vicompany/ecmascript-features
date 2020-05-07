class TextParser {
	constructor(string) {
		this._index = 0;
		this._text = string;
	}

	next() {
		if (this._index < 0 || this._index >= this._text.length - 1) {
			return { done: true };
		}

		const start = this._index;
		const end = this._text.indexOf(' ', start);

		// End is reached
		if (end === -1) {
			this._index = -1;

			return { value: this._text.substring(start) };
		}

		this._index = end + 1;

		return { value: this._text.substring(start, end) };
	}

	[Symbol.iterator]() {
		return this;
	}
}

module.exports = () => {
	const parser = new TextParser('Front-end forever, forever front-end!');

	console.log([...parser]);
};
