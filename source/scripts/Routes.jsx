import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';

export default function Routes() {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App} />
		</Router>
	);
}
