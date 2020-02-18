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

// Identical to array.map(fn).flat(1), but in a single pass
const result = array.flatMap((value, index) => {
	if (typeof value === 'string') {
		return value.replace(/^item\s+/, '');
	}

	return value;
});

console.log(array, '=>', result);
