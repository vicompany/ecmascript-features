module.exports = () => {
	const value = 1337.42;
	const formatter = new Intl.NumberFormat('nl-NL', {
		style: 'unit',
		unit: 'kilobyte-per-second',
	});

	console.log(formatter.format(value), '=', formatter.formatToParts(value));
};
