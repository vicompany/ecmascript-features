module.exports = () => {
	console.log('BigInt("4")     =', BigInt('4'));
	console.log('BigInt([4])     =', BigInt([4]));
	console.log('BigInt(4)       =', BigInt(4));
	console.log('BigInt(4n)      =', BigInt(4n), '\n');

	// Easy mistakes
	console.log('new BigInt(4)     throws TypeError: BigInt is not a constructor');
	console.log('BigInt(4.5)       throws RangeError: The number 4.5 cannot be converted to a BigInt because it is not an integer');

	// Easy mistakes without Number.parseInt()
	console.log('BigInt("4 EUR")   throws SyntaxError: Cannot convert 4 EUR to a BigInt');

	// Weird stuff
	console.log('BigInt()          throws TypeError: Cannot convert undefined to a BigInt');
	console.log('BigInt(null)      throws TypeError: Cannot convert null to a BigInt');
	console.log('BigInt(undefined) throws TypeError: Cannot convert undefined to a BigInt');
	console.log('BigInt([4, 5])    throws TypeError: Cannot convert 4,5 to a BigInt');
};
