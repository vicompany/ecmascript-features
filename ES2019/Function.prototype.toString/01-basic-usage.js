function myFunction() {
	console.log('hoi');
}

module.exports = () => {
	console.log(myFunction.toString());

	// new WebWorker(`data:text/javascript,${myFunction.toString()}`); 😏
};
