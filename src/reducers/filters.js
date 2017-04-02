const initState = [
	{
		id: 0,
		name: 'By alphabet',
		type: 'switch',
		sortsBy: 'name',
		enabled: true,
		active: false
	},
	{
		id: 1,
		name: 'By location',
		type: 'dropdown',
		filtersBy: 'location',
		enabled: true,
		active: false,
		unfolded: false,
		units: [
			'engine bay',
			'rear - lifted',
			'front - lifted',
			'test-drive'
		],
		activeUnit: undefined
	},
	{
		id: 2,
		name: 'By mechanical group',
		type: 'dropdown',
		filtersBy: 'mechanicalGroup',
		enabled: true,
		active: false,
		unfolded: false,
		units: [
			'engine',
			'transmission',
			'pipes',
			'exhaust',
			'interior',
			'brakes',
			'body & paint',
			'glass'
		],
		activeUnit: undefined
	},
	{
		id: 3,
		name: 'By tools required',
		type: 'switch',
		sortsBy: 'tools',
		enabled: true,
		active: false
	},
	{
		id: 4,
		name: 'By complexity of repair',
		type: 'switch',
		enabled: true,
		active: false,
		sortsBy: 'cor'
	},
	{
		id: 5,
		name: 'By complexity of diagnose',
		type: 'switch',
		sortsBy: 'cod',
		enabled: true,
		active: false
	},
	{
		id: 6,
		name: 'By importance',
		type: 'switch',
		sortsBy: 'imp',
		enabled: true,
		active: false
	},
	{
		id: 7,
		name: 'By symptom type',
		type: 'dropdown',
		filtersBy: 'symptoms',
		enabled: false,
		active: false,
		unfolded: false,
		units: [],
		activeUnit: undefined
	}
];

export default function (state = initState, action) {
	switch (action.type) {
		case 'TRIGGER_FILTER': {
			let newState = [ ...state ];
			let filterType = action.payload.filterType;
			let id = action.payload.filterId;
			switch (filterType) {
				case 'switch': {
					newState[id].active = !newState[id].active;
					break;
				}
				case 'dropdown': {
					for (let i = 0; i < newState.length; i++) {
						newState[i].activeUnit = undefined;
						newState[i].active = false;
						if (newState[i].type === 'dropdown' && newState[i] !== newState[id]) {
							newState[i].unfolded = false;
						}
					}
					newState[id].unfolded = !newState[id].unfolded;
					break;
				}
				default: {

				}
			}
			return newState;
		}
		case 'CHOOSE_DROPDOWN': {
			let newState = [ ...state ];
			let id = action.payload.filterId;
			let activeUnit = action.payload.unit;
			for (let i = 0; i < newState.length; i++) {
				newState[i].activeUnit = undefined;
				newState[i].active = false;
			}				
			newState[id].activeUnit = activeUnit;
			newState[id].active = true;
			newState[id].unfolded = false;
			return newState;
		}
		// case 'FILTER_TICKETS': {
		// 	let newState = [ ...state ];
		// 	newState[action.payload.filterId - 1].activeUnit = action.payload.value;
		// 	return newState;
		// }
		// case 'DROP_DOWN_FILTER': {
		// 	let newState = [ ...state ];
		// 	newState[action.payload - 1].status = state[action.payload - 1].status === 0 ? 1 : 0;
		// 	return newState;
		// }
		// case 'SORT_ALPHABET_DOWN': {
		// 	let newState = [ ...state ];
		// 	newState[0].status = 0;
		// 	return newState;
		// }
		// case 'SORT_ALPHABET_UP': {
		// 	let newState = [ ...state ];
		// 	newState[0].status = 1;
		// 	return newState;
		// }
		// case 'SORT_TOOLS_DOWN': {
		// 	let newState = [ ...state ];
		// 	newState[3].status = 0;
		// 	return newState;
		// }
		// case 'SORT_TOOLS_UP': {
		// 	let newState = [ ...state ];
		// 	newState[3].status = 1;
		// 	return newState;
		// }
		// case 'SORT_COR_DOWN': {
		// 	let newState = [ ...state ];
		// 	newState[4].status = 0;
		// 	return newState;
		// }
		// case 'SORT_COR_UP': {
		// 	let newState = [ ...state ];
		// 	newState[4].status = 1;
		// 	return newState;
		// }
		// case 'SORT_COD_DOWN': {
		// 	let newState = [ ...state ];
		// 	newState[5].status = 0;
		// 	return newState;
		// }
		// case 'SORT_COD_UP': {
		// 	let newState = [ ...state ];
		// 	newState[5].status = 1;
		// 	return newState;
		// }
		// case 'SORT_IMPORTANCE_DOWN': {
		// 	let newState = [ ...state ];
		// 	newState[6].status = 0;
		// 	return newState;
		// }
		// case 'SORT_IMPORTANCE_UP': {
		// 	let newState = [ ...state ];
		// 	newState[6].status = 1;
		// 	return newState;
		// }
		default: {
			return state;
		}
	}
}