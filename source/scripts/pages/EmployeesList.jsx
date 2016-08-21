import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import EmployeesTable from '../components/EmployeesTable';

const EmployeeList = React.createClass({
	render() {
		const {props} = this;
		const addModalUrl = {
			pathname: props.pathname,
			query: {modal: 'addEmployee'},
		};

		return (
			<div>
				<p><Link to={addModalUrl}>Добавить</Link></p>
				<EmployeesTable employees={props.employees} pathname={props.pathname} />
			</div>
		);
	},
});

function mapStateToProps(state) {
	return {
		employees: state.rootReducer.employees,
		pathname: state.routing.locationBeforeTransitions.pathname,
	};
}


export default connect(mapStateToProps)(EmployeeList);
