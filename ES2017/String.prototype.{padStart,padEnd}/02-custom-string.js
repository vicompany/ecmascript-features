/* eslint-disable newline-per-chained-call, no-bitwise */
function createColor() {
	return Math.floor(Math.random() * 0xFFFFFF);
}

function colorValueToRgb(value) {
	return [
		value & 0xFF,
		(value << 2) & 0xFF,
		(value << 4) & 0xFF,
	];
}

function rgbToHexString(channels) {
	const hex = channels
		.map(c => c.toString(16).padStart(2, '0'))
		.join('');

	return `#${hex}`;
}

module.exports = () => {
	const colors = new Array(16).fill().map(createColor);

	for (const color of colors) {
		const rgb = colorValueToRgb(color);
		const hex = rgbToHexString(rgb);

		console.log(hex);
	}
};
