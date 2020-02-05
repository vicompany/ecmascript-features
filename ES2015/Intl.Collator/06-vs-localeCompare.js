const query = 'besta';

const data = [
	'bestå',
	'flärdfull',
	'grönkulla',
	'norröra',
	'ödmjuk',
	'smörboll',
];

const locale = 'se';
const settings = {
	sensitivity: 'base',
};

// Use String.prototype.localeCompare() for one-shot checks
console.log(`${query} == ${data[0]} =>`, query.localeCompare(data[0], locale, settings) === 0);

// Use Intl.Collator for comparing several items
const collator = new Intl.Collator(locale, settings);

console.log(data, '=>', data.filter(v => collator.compare(v, query) === 0));
