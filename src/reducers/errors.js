export default function(state = [], action) {
	switch (action.type) {
		case "CREATE_ERROR": {
			let newState = [ ...state ];
			newState.push(action.payload);
			return newState;
		}
		case "DELETE_ERRORS": {
			let newState = [ ...state ];
			if (typeof action.payload === 'string') {
				for (let i = 0; i < newState.length; i++) {
					if (newState[i] === action.payload) {
						newState.splice(i, 1);
					}
				}
			} else if (action.payload.length !== undefined) {
				for (let i = 0; i < newState.length; i++) {
					for (let j = 0; j < action.payload.length; j++) {
						if (newState[i] === action.payload[j]) {
							newState.splice(i, 1);
						}
					}
				}
			}
			return newState;
		}
		default: {
			return state;
		}
	}
}