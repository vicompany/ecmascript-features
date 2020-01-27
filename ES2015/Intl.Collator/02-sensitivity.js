const data = ['a', 'A', 'ä', 'b', 'B'];

/* eslint-disable no-multi-spaces */
const sensitivtyList = [
	'accent',  // sorts on letters and accents (a == A < ä)
	'base',    // sorts on letters (a == A == ä)
	'case',    // sorts on letters and casing (a < A == ä)
	'variant', // sorts on everything (a < A < ä)
];
/* eslint-enable no-multi-spaces */

sensitivtyList.forEach((sensitivity) => {
	const collator = new Intl.Collator('nl', { sensitivity });
	const result = data.sort(collator.compare);

	console.log({ sensitivity, result });
});
