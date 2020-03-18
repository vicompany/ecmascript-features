const array = [
	'item 1',
	[
		'item 2.1',
		'item 2.2',
	],
	[
		'item 3.1',
		[
			'item 3.2.1',
			'item 3.2.2',
		],
	],
];

module.exports = () => {
	console.log('Original array', array);

	for (let i = 0; i <= 2; i++) {
		const result = array.flat(i);

		console.log(`flat(${i}) =>`, result);
	}
};
