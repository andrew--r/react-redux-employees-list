import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {removeModalFromQuery} from '../helpers';

import {createEmployee} from '../actions';
import EmployeeForm from './EmployeeForm';


const AddEmployee = React.createClass({
	render() {
		const {dispatch, routing} = this.props;
		return (
			<EmployeeForm
				onSubmit={(employeeInfo) => {
					dispatch(createEmployee(employeeInfo));
					hashHistory.push(removeModalFromQuery(routing));
				}}
			/>
		);
	},
});

function mapStateToProps(state) {
	return {
		routing: state.routing.locationBeforeTransitions,
	};
}

export default connect(mapStateToProps)(AddEmployee);
