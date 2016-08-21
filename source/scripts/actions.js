import {
	CREATE_EMPLOYEE,
	UPDATE_EMPLOYEE_INFO,
} from './consts';


export function createEmployee(payload) {
	return {
		type: CREATE_EMPLOYEE,
		payload,
	};
}

export function updateEmployeeInfo(payload) {
	return {
		type: UPDATE_EMPLOYEE_INFO,
		payload,
	};
}
