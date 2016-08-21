import React from 'react';
import {Link, hashHistory} from 'react-router';

export default function EmployeesTable(props) {
	const {employees} = props;
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
						<tr
							key={employee.id}
							className="u-clickable"
							onClick={() => hashHistory.push(`employees/${employee.id}`)}
						>
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
			<p>Список сотрудников пуст. <Link to="/employees/add">Добавьте нового!</Link></p>
		);
	}

	return result;
}
