const data = [
	'¡hello world!',
	'hello Alice',
	'hello world',
	'hello_world',
];

const query = 'hello world';

const ignorePunctuationFalse = new Intl.Collator('nl');
const ignorePunctuationTrue = new Intl.Collator('nl', { ignorePunctuation: true });

console.log({ ignorePunctuation: false }, '=>', data.filter(v => ignorePunctuationFalse.compare(v, query) === 0));
console.log({ ignorePunctuation: true }, '=>', data.filter(v => ignorePunctuationTrue.compare(v, query) === 0));
