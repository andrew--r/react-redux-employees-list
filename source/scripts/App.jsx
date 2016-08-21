import React from 'react';

const App = React.createClass({
	render() {
		const {props} = this;
		return (
			<div className="app">
				<h1>Список сотрудников</h1>
				<div>{props.children}</div>
			</div>
		);
	},
});

export default App;
