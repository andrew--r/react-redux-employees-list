import {
	CREATE_EMPLOYEE,
} from './consts';

const initialState = {
	lastEmployeeId: 0,
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

		default: {
			return state;
		}
	}
}
