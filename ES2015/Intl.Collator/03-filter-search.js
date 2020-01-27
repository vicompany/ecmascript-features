const query = 'HeLlO wOrLd';
const data = [
	'Hello Alice',
	'Hello world',
	'Hello wörld',
];

const collator = new Intl.Collator('de', {
	sensitivity: 'base',
	usage: 'search', // Uses the UTF8 -co-search extension, though not sure what that does
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare#Using_compare_for_array_search
const results = data.filter(v => collator.compare(v, query) === 0);

console.log(data, '=>', results);
