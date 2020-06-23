module.exports = () => {
	console.log('9999999999999999n.toString()       =', 9999999999999999n.toString(10));
	console.log('9999999999999999n.toLocaleString() =', 9999999999999999n.toLocaleString(), '\n');

	console.log('BigInt.asUintN(2, 9999999999999999n) =', BigInt.asUintN(2, 9999999999999999n));
	console.log('BigInt.asUintN(4, 9999999999999999n) =', BigInt.asUintN(4, 9999999999999999n));
	console.log('BigInt.asUintN(8, 9999999999999999n) =', BigInt.asUintN(8, 9999999999999999n));
	console.log('BigInt.asUintN(16, 9999999999999999n) =', BigInt.asUintN(16, 9999999999999999n));
	console.log('BigInt.asUintN(32, 9999999999999999n) =', BigInt.asUintN(32, 9999999999999999n));
	console.log('BigInt.asUintN(64, 9999999999999999n) =', BigInt.asUintN(64, 9999999999999999n), '\n');

	console.log('BigInt.asIntN(32, 9999999999999999n) =', BigInt.asIntN(32, 9999999999999999n));
	console.log('BigInt.asIntN(64, 9999999999999999n) =', BigInt.asIntN(64, 9999999999999999n));
};
