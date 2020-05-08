function createTextParser(text) {
	return {
		* [Symbol.iterator]() {
			let buffer = '';

			for (const char of text) {
				if (char === ' ') {
					yield buffer;
					buffer = '';
				} else {
					buffer += char;
				}
			}

			yield buffer;
		},
	};
}

module.exports = () => {
	const parser = createTextParser('Front-end forever, forever front-end!');

	console.log([...parser]);
};
