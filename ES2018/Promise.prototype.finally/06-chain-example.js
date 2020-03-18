const { sleep } = require('./lib/sleep');

function doAsyncAction() {
	return sleep(0.5)
		.finally(() => console.log('doAsyncAction is done'));
}

function doAsyncActionThatFails() {
	return sleep(0.5)
		.then(() => {
			throw new Error('Too bad');
		})
		.finally(() => console.log('doAsyncActionThatFails is done'));
}

module.exports = () => doAsyncAction()
	.then(doAsyncAction)
	.then(doAsyncActionThatFails)
	.catch(console.error)
	.finally(() => console.log('Everything is done'));
