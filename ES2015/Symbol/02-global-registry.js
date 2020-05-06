module.exports = () => {
	const obj = {
		[Symbol.for('myIdentifierName')]() {
			console.log(`Hello from method ${Symbol.for('myIdentifierName').toString()}!`);
		},
	};

	obj[Symbol.for('myIdentifierName')]();
};
