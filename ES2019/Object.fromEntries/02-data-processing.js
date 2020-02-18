function kebabToCamelCase(string) {
	return string.replace(/-\p{L}/gu, match => match[1].toLocaleUpperCase());
}

const headers = {
	'Cache-Control': 'no-cache',
	'Content-Encoding': 'gzip',
	'Content-Length': '1337',
	'Content-Type': 'application/json',
};

const headersNormalized = Object.fromEntries(Object.entries(headers)
	.map(([key, value]) => [kebabToCamelCase(key), value]));

console.log(headers, '=>', headersNormalized);
