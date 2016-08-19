import {
	OPEN_MODAL,
} from './consts';

const initialState = {
	openedModal: null,
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case OPEN_MODAL: {
			return Object.assign({}, state, {
				openedModal: action.payload,
			});
		}

		default: {
			return state;
		}
	}
}
