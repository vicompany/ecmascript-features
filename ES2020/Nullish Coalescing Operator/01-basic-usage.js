const tests = [
	['', 'fallback'],
	[[], 'fallback'],
	[{}, 'fallback'],
	[0, 'fallback'],
	[null, 'fallback'],
	// eslint-disable-next-line no-undefined
	[undefined, 'fallback'],
];

module.exports = () => {
	for (const [a, b] of tests) {
		const resultString = String(JSON.stringify(a));

		console.log(`${resultString.padStart(9, ' ')} ?? ${JSON.stringify(b)}`, '===', JSON.stringify(a ?? b));
	}
};
