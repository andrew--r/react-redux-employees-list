import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';
import App from './App';
import EmployeesList from './pages/EmployeesList';
import Employee from './pages/Employee';

export default function Routes(props) {
	return (
		<Router history={props.history}>
			<Route path="/" component={App}>
				<IndexRedirect to="employees" />
				<Route path="employees" component={EmployeesList} />
				<Route path="employees/:id" component={Employee} />
			</Route>
		</Router>
	);
}
