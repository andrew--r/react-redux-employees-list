import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import Routes from './Routes';
import rootReducer from './reducers';

function getInitialState() {
	let result;
	const storedState = localStorage.getItem('appState');

	try {
		result = JSON.parse(storedState);
	} catch (e) {
		console.error(e);
	}

	console.log('result', result)

	return result || {};
}

const store = createStore(
	combineReducers({
		rootReducer,
		routing: routerReducer,
	}),
	getInitialState(),
	window.devToolsExtension && window.devToolsExtension()
);

store.subscribe(() => localStorage.setItem('appState', JSON.stringify(store.getState())));

const history = syncHistoryWithStore(hashHistory, store);

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

function onDOMContentLoaded() {
	ReactDOM.render(<AppRoot />, document.querySelector('#app'));
}

function AppRoot() {
	return (
		<Provider store={store}>
			<Routes history={history} />
		</Provider>
	);
}
