import React from 'react';


export default function App(props) {
	return (
		<div className="app">
			<h1>Список сотрудников</h1>
			<div>{props.children}</div>
		</div>
	);
}
