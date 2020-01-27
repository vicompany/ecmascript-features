const data = [
	'2-my-file.jpg',
	'1-my-file.jpg',
	'10-my-file.jpg',
];

const collatorDefault = new Intl.Collator('nl', { numeric: false });
const collatorNumeric = new Intl.Collator('nl', { numeric: true });

console.log({ numeric: false }, '=>', data.sort(collatorDefault.compare));
console.log({ numeric: true }, '=>', data.sort(collatorNumeric.compare));
