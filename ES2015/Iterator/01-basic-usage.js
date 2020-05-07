const map = new Map([
	['foo', 'bar'],
	['bar', 'baz'],
]);

module.exports = () => {
	// Iterator is just an object with a next() method that returns { done: boolean, value: any }
	const iterator = map.entries();

	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
};
