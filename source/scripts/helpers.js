export function queryToString(query, excludeList) {
	const params = Object
		.keys(query)
		.filter((key) => !~key.indexOf(excludeList))
		.map((key) => `${key}=${query[key]}`);

	return params.length ? `?${params.join('&')}` : '';
}

export function removeModalFromQuery(routing) {
	const queryString = queryToString(routing.query, ['modal']);
	return routing.pathname + queryString;
}
