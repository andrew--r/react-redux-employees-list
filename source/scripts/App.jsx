import React from 'react';
import {connect} from 'react-redux';

import Modal from './components/Modal';
import AddEmployee from './components/AddEmployee';

const App = React.createClass({
	render() {
		const {props} = this;
		const {modal} = props.routing.query;
		return (
			<div className="app">
				<h1>Список сотрудников</h1>
				<div>{props.children}</div>
				{modal === 'addEmployee' && <AddModal />}
			</div>
		);
	},
});


function AddModal() {
	return (
		<Modal title="Добавление сотрудника">
			<AddEmployee />
		</Modal>
	);
}

function mapStateToProps(state) {
	return {
		openedModal: state.rootReducer.openedModal,
		routing: state.routing.locationBeforeTransitions,
	};
}

export default connect(mapStateToProps)(App);
