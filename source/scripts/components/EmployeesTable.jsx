import React from 'react';
import {Link} from 'react-router';

export default function EmployeesTable(props) {
	const {employees, pathname} = props;
	const addModalUrl = {
		pathname,
		query: {modal: 'addEmployee'},
	};
	let result;

	if (employees.length) {
		result = (
			<table>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Фамилия</th>
						<th>Должность</th>
					</tr>
				</thead>
				<tbody>
					{props.employees.map((employee) => (
						<tr key={employee.id}>
							<td>{employee.firstName}</td>
							<td>{employee.lastName}</td>
							<td>{employee.position}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	} else {
		result = (
			<p>Список сотрудников пуст. <Link to={addModalUrl}>Добавьте нового!</Link></p>
		);
	}

	return result;
}
