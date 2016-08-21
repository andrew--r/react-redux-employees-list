import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

import {updateEmployeeInfo} from '../actions';

import Modal from './Modal';
import EmployeeForm from './EmployeeForm';


function EditEmployeeModal(props) {
	const {dispatch, params, employee} = props;
	const prevUrl = `/employees/${params.id}`;
	return (
		<Modal title="Редактирование сотрудника" prevUrl={prevUrl}>
			<EmployeeForm
				firstName={employee.firstName}
				lastName={employee.lastName}
				position={employee.position}
				description={employee.description}
				onSubmit={(employeeInfo) => {
					dispatch(updateEmployeeInfo(Object.assign({}, employeeInfo, {
						id: parseInt(params.id, 10),
					})));
					hashHistory.push(prevUrl);
				}}
			/>
		</Modal>
	);
}

function mapStateToProps(state, ownProps) {
	return {
		employee: state.rootReducer.employees[ownProps.params.id],
	};
}

export default connect(mapStateToProps)(EditEmployeeModal);
