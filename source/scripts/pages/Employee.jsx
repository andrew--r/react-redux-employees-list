import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const Employee = React.createClass({
	render() {
		const {props} = this;
		const {employee} = props;

		return (
			<div>
				<p>
					<Link to="/employees">← Ко всем сотрудникам</Link>
					{' • '}
					<Link to={`/employees/${props.params.id}/edit`}>Редактировать</Link>
				</p>
				<h2>
					{`${employee.firstName} ${employee.lastName}`},{' '}
					<small>{employee.position.toLowerCase()}</small>
				</h2>
				<p>{employee.description}</p>
				{props.children}
			</div>
		);
	},
});

function mapStateToProps(state, ownProps) {
	return {
		employee: state.rootReducer.employees[ownProps.params.id],
	};
}


export default connect(mapStateToProps)(Employee);
