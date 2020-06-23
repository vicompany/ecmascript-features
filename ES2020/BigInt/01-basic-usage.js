module.exports = () => {
	const a = 999999999999999999999999999999999999999999n;
	let b = BigInt('1');

	console.log('a =', a);
	console.log('b =', b);
	console.log('a + b > Number.MAX_SAFE_INTEGER =', a + b > Number.MAX_SAFE_INTEGER);

	console.log('++b =', ++b);
};
