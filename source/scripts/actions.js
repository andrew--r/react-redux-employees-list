import {
	OPEN_MODAL,
	CREATE_EMPLOYEE,
} from './consts';

export function openModal(payload) {
	return {
		type: OPEN_MODAL,
		payload,
	};
}

export function createEmployee(payload) {
	return {
		type: CREATE_EMPLOYEE,
		payload,
	};
}
