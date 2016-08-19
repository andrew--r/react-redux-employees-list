import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import Routes from './Routes';
import rootReducer from './reducers';

const store = createStore(
	combineReducers({
		rootReducer,
		routing: routerReducer,
	}),
	window.devToolsExtension && window.devToolsExtension()
);

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
