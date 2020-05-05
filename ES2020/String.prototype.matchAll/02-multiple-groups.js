const now = new Date();

const text = `<time datetime="${new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()).toISOString()}">One year ago</time>
<time datetime="${new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1).toISOString()}">Yesterday</time>
<time datetime="${now.toISOString()}">Today</time>
<time datetime="${new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)}">Tomorrow</time>`;

module.exports = () => {
	const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/gi;

	for (const match of text.matchAll(pattern)) {
		console.log({...match.groups});
	}
};
