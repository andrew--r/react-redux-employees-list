import React from 'react';
import {connect} from 'react-redux';

import {createEmployee} from '../actions';
import EmployeeForm from './EmployeeForm';


const AddEmployee = React.createClass({
	render() {
		const {dispatch} = this.props;
		return (
			<EmployeeForm
				firstName="Андрей"
				lastName="Романов"
				onSubmit={(employeeInfo) => dispatch(createEmployee(employeeInfo))}
			/>
		);
	},
});

export default connect()(AddEmployee);
