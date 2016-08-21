import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

import {createEmployee} from '../actions';

import Modal from './Modal';
import EmployeeForm from './EmployeeForm';


function AddEmployeeModal(props) {
	const {dispatch} = props;
	const prevUrl = '/employees';
	return (
		<Modal title="Добавление сотрудника" prevUrl={prevUrl}>
			<EmployeeForm
				onSubmit={(employeeInfo) => {
					dispatch(createEmployee(employeeInfo));
					hashHistory.push(prevUrl);
				}}
			/>
		</Modal>
	);
}

export default connect()(AddEmployeeModal);
