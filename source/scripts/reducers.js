import {
	CREATE_EMPLOYEE,
	UPDATE_EMPLOYEE_INFO,
} from './consts';

const initialState = {
	lastEmployeeId: -1,
	employees: [],
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_EMPLOYEE: {
			const newEmployee = Object.assign({}, action.payload, {
				id: state.lastEmployeeId + 1,
			});

			return Object.assign({}, state, {
				lastEmployeeId: newEmployee.id,
				employees: state.employees.concat(newEmployee),
			});
		}

		case UPDATE_EMPLOYEE_INFO: {
			const employeeIndex = action.payload.id;
			const {employees} = state;
			return Object.assign({}, state, {
				employees: [
					...employees.slice(0, employeeIndex),
					action.payload,
					...employees.slice(employeeIndex + 1),
				],
			});
		}

		default: {
			return state;
		}
	}
}
