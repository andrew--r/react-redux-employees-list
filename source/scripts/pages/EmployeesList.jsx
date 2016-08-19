import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const EmployeeList = React.createClass({
	render() {
		return (
			<div className="employees-list">
				<Link to="/employees?modal=addEmployee">Добавить</Link>
				<div>Employees</div>
				<Link to="/employees/1">first</Link>
			</div>
		);
	},
});


export default connect()(EmployeeList);
