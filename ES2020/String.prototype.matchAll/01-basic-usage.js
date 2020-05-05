const text = `<nav><ul>
	<li><a href="/">Home</a></li>
	<li><a href="/bikes">Bikes</a></li>
	<li><a href="/choppers">Choppers</a></li>
	<li><a href="/mopeds">Mopeds</a></li>
	<li><a href="/contact">Contact</a></li>
</ul></nav>`;

module.exports = () => {
	const pattern = /href\s*=\s*"(?<href>[^"]+)"/gi;

	for (const match of text.match(pattern)) {
		console.log(match);
	}

	for (const match of text.matchAll(pattern)) {
		console.log(match.groups.href);
	}
};
