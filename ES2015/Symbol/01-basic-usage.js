module.exports = () => {
	const identifier1 = Symbol('myIdentifierName');
	const identifier2 = Symbol('myIdentifierName');

	const obj = {
		[identifier1]() {
			console.log(`Hello from method identifier1: ${identifier1.toString()}!`);
		},
		[identifier2]() {
			console.log(`Hello from method identifier2: ${identifier2.toString()}!`);
		},
	};

	console.log(`${identifier1.toString()} === ${identifier2.toString()} = ${identifier1 === identifier2}`);

	obj[identifier1]();
	obj[identifier2]();
	// `obj[Symbol('myIdentifierName')]()` won't work

	console.log(Object.getOwnPropertySymbols(obj));
};
