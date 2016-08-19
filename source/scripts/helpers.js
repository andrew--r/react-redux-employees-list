export function queryToString(query, excludeList) {
	const params = Object
		.keys(query)
		.filter((key) => !~key.indexOf(excludeList))
		.map((key) => `${key}=${query[key]}`);

	return params.length ? `?${params.join('&')}` : '';
}
