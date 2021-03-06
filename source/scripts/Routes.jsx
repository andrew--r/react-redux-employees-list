import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';
import App from './App';
import EmployeesList from './pages/EmployeesList';
import AddEmployeeModal from './components/AddEmployeeModal';
import Employee from './pages/Employee';
import EditEmployeeModal from './components/EditEmployeeModal';


export default function Routes(props) {
	return (
		<Router history={props.history}>
			<Route path="/" component={App}>
				<IndexRedirect to="employees" />
				<Route path="employees" component={EmployeesList}>
					<Route path="add" component={AddEmployeeModal} />
				</Route>
				<Route path="employees/:id" component={Employee}>
					<Route path="edit" component={EditEmployeeModal} />
				</Route>
			</Route>
		</Router>
	);
}
