import {
	CREATE_EMPLOYEE,
} from './consts';

export function createEmployee(payload) {
	return {
		type: CREATE_EMPLOYEE,
		payload,
	};
}
