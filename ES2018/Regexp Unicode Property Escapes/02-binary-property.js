function isHexString(string) {
	// eslint-disable-next-line prefer-named-capture-group
	return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(string);
}

function isHexStringUnicode(string) {
	// eslint-disable-next-line prefer-named-capture-group
	return /^#(\p{Hex_Digit}{3}|\p{Hex_Digit}{6})$/u.test(string);
}

const texts = [
	'Katakana',
	'#BADA55',
	'#C55',
	'#101',
	'#FFFFFF',
	'#GGGGGG',
	'#\u{FF10}\u{FF10}\u{FF10}\u{FF10}\u{FF10}\u{FF10}',
];

module.exports = () => {
	texts.forEach((string) => {
		console.log(`isHexString(${string})`, '=>', isHexString(string));
		console.log(`isHexStringUnicode(${string})`, '=>', isHexStringUnicode(string));
	});
};
