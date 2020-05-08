function* getRandomNumber() {
	while (true) {
		yield Math.random();
	}
}

module.exports = () => {
	// Generator functions return iterators
	const iterator = getRandomNumber();

	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());

	// [...iterator] causes an infinite loop
};
