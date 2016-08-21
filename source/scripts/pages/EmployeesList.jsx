import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import EmployeesTable from '../components/EmployeesTable';

function EmployeeList(props) {
	return (
		<div>
			<p><Link to="/employees/add">Добавить</Link></p>
			<EmployeesTable employees={props.employees} />
			{props.children}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		employees: state.rootReducer.employees,
	};
}


export default connect(mapStateToProps)(EmployeeList);
