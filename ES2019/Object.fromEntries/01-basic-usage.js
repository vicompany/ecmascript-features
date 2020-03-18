const entries = [
	['key', 'value'],
	['foo', 'bar'],
];

module.exports = () => {
	const result = Object.fromEntries(entries);

	console.log(entries, '=>', result);
};
