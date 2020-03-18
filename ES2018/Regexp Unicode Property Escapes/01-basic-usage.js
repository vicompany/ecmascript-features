function stringContainsKatakana(string) {
	return /\p{Script=Katakana}/u.test(string);
}

const texts = [
	'Katakana',
	'カタカナ',
	'ッツㇱ',
];

module.exports = () => {
	texts.forEach((string) => {
		console.log(string, '=>', stringContainsKatakana(string));
	});
};
