module.exports = () => {
	console.log('1n instanceof BigInt =', 1n instanceof BigInt);
	console.log('typeof 1n            =', typeof 1n, '\n');

	console.log('Number.isFinite(1n)       =', Number.isFinite(1n));
	console.log('Number.isInteger(1n)      =', Number.isInteger(1n));
	console.log('Number.isNaN(1n)          =', Number.isNaN(1n));
	console.log('Object.getPrototypeOf(1n) =', Object.getPrototypeOf(1n));
	console.log('Object.keys(1n)           =', Object.keys(1n));
};
