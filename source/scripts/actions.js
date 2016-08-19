import {
	OPEN_MODAL,
} from './consts';

export function openModal(name) {
	return {
		type: OPEN_MODAL,
		payload: name,
	};
}
