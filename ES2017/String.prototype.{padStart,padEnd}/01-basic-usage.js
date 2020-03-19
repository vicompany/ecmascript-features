const os = require('os');

function createBox(width) {
	const widthText = width - 4;

	return {
		createBreak() {
			return `├${'─'.repeat(width - 2)}┤`;
		},

		createHeader(str) {
			return [
				this.createLine(str),
				`╞${'═'.repeat(width - 2)}╡`,
			].join('\n');
		},

		createLine(str) {
			return `│ ${str.padEnd(widthText)} │`;
		},

		createSeparatedLine(str1, str2) {
			return this.createLine(str1 + str2.padStart(widthText - str1.length));
		},

		toString(lines) {
			return [
				`╒${'═'.repeat(width - 2)}╕`,
				...lines,
				`╘${'═'.repeat(width - 2)}╛\n`,
			].join('\n');
		},
	};
}

module.exports = () => {
	const interfaces = Object.entries(os.networkInterfaces());

	for (const network of interfaces) {
		const box = createBox(64);

		const [name, addresses] = network;

		console.log(box.toString([
			box.createHeader(name),

			...addresses.reduce((lines, address, index) => {
				if (index > 0) {
					lines.push(box.createBreak());
				}

				return [
					...lines,
					box.createSeparatedLine('Type', address.family),
					box.createSeparatedLine('Address', address.address),
					box.createSeparatedLine('Mac', address.mac),
					box.createSeparatedLine('Netmask', address.netmask),
				];
			}, []),
		]));
	}
};
