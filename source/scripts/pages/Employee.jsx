import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import EmployeesTable from '../components/EmployeesTable';

const Employee = React.createClass({
	render() {
		const {props} = this;
		const editModalUrl = {
			pathname: props.pathname,
			query: {modal: 'editEmployee'},
		};

		return (
			<div>
				<p><Link to={editModalUrl}>Редактировать</Link></p>
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


export default connect(mapStateToProps)(Employee);
