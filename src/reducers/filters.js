/* 

HOW FILTERS WORK

State of a filter

id: no comments
name: displays in the title
type: 'switch', 'dropdown' and 'direction'
	('switch' - means two states - 'status: 0 and 1'.
	'dropdown' - statuses are: 0 for folded dropdown, 1 for unfolded, 2 for dropdown with a chosen option
	'direction' - statuses are: 0 for inactive, 1 for active first direction, 2 for active second direction, except for alphabet, that is always either 1 or 2)
status: described above
interestedOf: name of a property in the 'ticket-preview' reducer
units (on the 'dropdown' type): options in the dropdown
activeUnit (on the 'dropdown' type): active option
enabled: pretty obvious

User scenario

User enters the ticket section, which starts uploading the tickets. On the upload tickets are sorted programmaticaly by alphabet - direction down.
Further aphabet sorting is provided by the reducer inside method, if User choosing the alphabet sorting option. This means, alphabet sorting is always enabled.
If User clicks on the alphabet filter, this event will change the 'alphabetSorting' property of the ticket-preview reducer and cause the tickets array to be sorted
accordingly.
If User clicks on one of the dropdown filters it will do nothing to the tickets array but it will unfold the dropdown, changing its status to 1. Further, if User
chooses an option, this dropdown filter status will change to 2, and activeUnit will become the option's value.
*/

const initState = [
	{
		id: 0,
		name: 'By alphabet',
		type: 'direction',
		status: 1,
		interestedOf: 'name',
		enabled: true
	},
	{
		id: 1,
		name: 'By location',
		type: 'dropdown',
		status: 0,
		interestedOf: 'location',
		units: [
			'engine bay',
			'rear - lifted',
			'front - lifted',
			'test-drive'
		],
		enabled: true
	},
	{
		id: 2,
		name: 'By mechanical group',
		type: 'dropdown',
		status: 0,
		interestedOf: 'mechanicalGroup',
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
		enabled: true
	},
	{
		id: 3,
		name: 'Only with tools from my toolbox',
		type: 'switch',
		status: 0,
		interestedOf: 'tools',
		enabled: true
	},
	{
		id: 4,
		name: 'By complexity of repair',
		type: 'direction',
		status: 0,
		interestedOf: 'cor',
		enabled: true
	},
	{
		id: 5,
		name: 'By complexity of diagnose',
		type: 'direction',
		status: 0,
		interestedOf: 'cod',
		enabled: true
	},
	{
		id: 6,
		name: 'By importance',
		type: 'direction',
		status: 0,
		interestedOf: 'imp',
		enabled: true
	},
	{
		id: 7,
		name: 'By symptom type',
		type: 'dropdown',
		status: 0,
		interestedOf: 'symptoms',
		units: [],
		enabled: false
	}
];

export default function (state = initState, action) {
	switch (action.type) {
		case 'TRIGGER_FILTER': {
			let newState = [ ...state ];
			let filter = action.payload.filter;
			let id = filter.id;
			switch (filter.type) {
				case 'switch': {
					newState[id].status = newState[id].status === 0 ? 1 : 0;
					break;
				}
				case 'direction': {
					if (filter.name === 'By alphabet') {
						newState[id].status = newState[id].status === 1 ? 2 : 1;
						break;
					}
					newState[id].status++;
					if (newState[id].status === 3) {
						newState[id].status = 0;
					}
					break;
				}
				case 'dropdown': {
					if (newState[id].status === 2 || newState[id].status === 1) {
						newState[id].status = 0;
						newState[id].activeUnit = undefined;
					} else if (newState[id].status === 0) {
						newState[id].status = 1;
					}
					break;
				}
				default: {
					console.log('error from filters reducer: wrong filter type');
				}
			}
			return newState;
		}
		case 'CHOOSE_DROPDOWN': {
			let newState = [ ...state ];
			let id = action.payload.filter.id;
			newState[id].activeUnit = action.payload.unit;
			newState[id].status = 2;
			return newState;
		}
		// case 'CHOOSE_DROPDOWN': {
		// 	let newState = [ ...state ];
		// 	let id = action.payload.filterId;
		// 	let activeUnit = action.payload.unit;
		// 	for (let i = 0; i < newState.length; i++) {
		// 		newState[i].activeUnit = undefined;
		// 		newState[i].active = false;
		// 	}				
		// 	newState[id].activeUnit = activeUnit;
		// 	newState[id].active = true;
		// 	newState[id].unfolded = false;
		// 	return newState;
		// }
		default: {
			return state;
		}
	}
}