const initState = {
	tickets: [
		{
			id: 1,
			name: 'Engine vibration',
			location: 'test-drive',
			mechanicalGroup: 'engine',
			photo: 'tp-1',
			tools: 0,
			imp: 2,
			cor: 2,
			cod: 1,
			safety: true,
			display: true
		},
		{
			id: 2,
			name: 'Visible Leaks',
			location: 'engine bay',
			mechanicalGroup: 'engine',
			photo: 'tp-2',
			tools: 0,
			imp: 2,
			cor: 3,
			cod: 1,
			safety: false,
			display: true
		},
		{
			id: 3,
			name: 'Liquids in Exhaust',
			location: 'exterior walkaround',
			mechanicalGroup: 'engine',
			photo: 'tp-3',
			tools: 0,
			imp: 3,
			cor: 3,
			cod: 1,
			safety: true,
			display: true
		},
		{
			id: 4,
			name: 'Broken part 1',
			location: 'rear - lifted',
			mechanicalGroup: 'transmission',
			photo: 'tp-4',
			tools: 2,
			imp: 3,
			cor: 2,
			cod: 3,
			safety: true,
			display: true
		},
		{
			id: 5,
			name: 'Broken part 2',
			location: 'engine bay',
			mechanicalGroup: 'transmission',
			photo: 'tp-5',
			tools: 5,
			imp: 3,
			cor: 2,
			cod: 1,
			safety: false,
			display: true
		},
		{
			id: 6,
			name: 'Broken part 3',
			location: 'engine bay',
			mechanicalGroup: 'pipes',
			photo: 'tp-6',
			tools: 7,
			imp: 3,
			cor: 3,
			cod: 1,
			safety: true,
			display: true
		},
		{
			id: 7,
			name: 'Exhaust falls off',
			location: 'rear - lifted',
			mechanicalGroup: 'exhaust',
			photo: 'tp-7',
			tools: 3,
			imp: 2,
			cor: 2,
			cod: 1,
			safety: true,
			display: true
		},
		{
			id: 8,
			name: 'Corporative leaks',
			location: 'engine bay',
			mechanicalGroup: 'interior',
			photo: 'tp-8',
			tools: 2,
			imp: 3,
			cor: 1,
			cod: 3,
			safety: true,
			display: true
		},
		{
			id: 9,
			name: 'Cut brake fluid line',
			location: 'rear - lifted',
			mechanicalGroup: 'pipes',
			photo: 'tp-9',
			tools: 7,
			imp: 3,
			cor: 3,
			cod: 1,
			safety: true,
			display: true
		},
		{
			id: 10,
			name: 'Warp engine clinking',
			location: 'engine bay',
			mechanicalGroup: 'engine',
			photo: 'tp-10',
			tools: 100,
			imp: 2,
			cor: 3,
			cod: 1,
			safety: false,
			display: true
		},
		{
			id: 11,
			name: 'Broken part 4',
			location: 'engine bay',
			mechanicalGroup: 'brakes',
			photo: 'tp-11',
			tools: 5,
			imp: 2,
			cor: 2,
			cod: 2,
			safety: true,
			display: true
		},
		{
			id: 12,
			name: 'Rust',
			location: 'exterior walkaround',
			mechanicalGroup: 'body & paint',
			photo: 'tp-12',
			tools: 3,
			imp: 1,
			cor: 1,
			cod: 1,
			safety: true,
			display: true
		},
		{
			id: 13,
			name: 'Broken part 5',
			location: 'rear - lifted',
			mechanicalGroup: 'exhaust',
			photo: 'tp-13',
			tools: 0,
			imp: 2,
			cor: 1,
			cod: 1,
			safety: false,
			display: true
		},
		{
			id: 14,
			name: 'Broken luck amulet',
			location: 'front - lifted',
			mechanicalGroup: 'interior',
			photo: 'tp-14',
			tools: 0,
			imp: 1,
			cor: 1,
			cod: 1,
			safety: true,
			display: true
		},
		{
			id: 15,
			name: 'Broken heart',
			location: 'engine bay',
			mechanicalGroup: 'engine',
			photo: 'tp-15',
			tools: 8,
			imp: 2,
			cor: 3,
			cod: 1,
			safety: true,
			display: true
		},
		{
			id: 16,
			name: 'Broken part 6',
			location: 'front - lifted',
			mechanicalGroup: 'glass',
			photo: 'tp-16',
			tools: 0,
			imp: 1,
			cor: 2,
			cod: 1,
			safety: false,
			display: true
		},
		{
			id: 17,
			name: 'Invisible leaks',
			location: 'engine bay',
			mechanicalGroup: 'engine',
			photo: 'tp-17',
			tools: 0,
			imp: 3,
			cor: 3,
			cod: 3,
			safety: true,
			display: true
		}
	],
	alphabetSorting: 'down',
	appliedSorting: undefined,
	appliedFilter: undefined
}


// Sorts tickets according to order argument, which can be either 'up' or 'down'. It takes ticket[criteria] properties and compares them to sort tickets.
// Also, if ticket[criteria] are equal, it compares equal tickets by alphabet, taking an argument 'alphabetOrder', which can be either 'up' or 'down'.
let sortTickets = (criteria, order, alphabetOrder) => (a, b) => {
	if (order === 'down' && alphabetOrder === 'down') {
		if (a[criteria] > b[criteria]) return 1;
		if (a[criteria] < b[criteria]) return -1;
		if (a[criteria] === b[criteria]) {
			if (a.name > b.name) return 1;
			if (a.name < b.name) return -1;
			if (a.name === b.name) return 0;
		}
	} else if (order === 'down' && alphabetOrder === 'up') {
		if (a[criteria] > b[criteria]) return 1;
		if (a[criteria] < b[criteria]) return -1;
		if (a[criteria] === b[criteria]) {
			if (a.name > b.name) return -1;
			if (a.name < b.name) return 1;
			if (a.name === b.name) return 0;
		}
	} else if (order === 'up' && alphabetOrder === 'down') {
		if (a[criteria] > b[criteria]) return -1;
		if (a[criteria] < b[criteria]) return 1;
		if (a[criteria] === b[criteria]) {
			if (a.name > b.name) return 1;
			if (a.name < b.name) return -1;
			if (a.name === b.name) return 0;
		}
	} else if (order === 'up' && alphabetOrder === 'up') {
		if (a[criteria] > b[criteria]) return -1;
		if (a[criteria] < b[criteria]) return 1;
		if (a[criteria] === b[criteria]) {
			if (a.name > b.name) return -1;
			if (a.name < b.name) return 1;
			if (a.name === b.name) return 0;
		}
	} else {
		throw new Error('order value can be either "up" of "down"');
	}
}

export default function (state = initState, action) {
	switch (action.type) {
		// case 'TRIGGER_FILTER': {
		// 	let newState = [ ...state ];
		// 	if (action.payload.filterType === 'switch') {
		// 		newState.sort(sortTickets(action.payload.filterSortsBy, action.payload.isFilterActive ? 'down': 'up'));
		// 	} else if (action.payload.filterType === 'dropdown') {
		// 		for (let i = 0; i < newState.length; i++) {
		// 			newState[i].display = true;
		// 		}
		// 	}
		// 	return newState;
		// }
		// case 'CHOOSE_DROPDOWN': {
		// 	console.log(action.payload);
		// 	let newState = [ ...state ];
		// 	for (let i = 0; i < newState.length; i++) {
		// 		if (newState[i][action.payload.filtersBy] !== action.payload.unit) {
		// 			newState[i].display = false;
		// 		}
		// 	}
		// 	return newState;
		// }
		// case 'FILTER_TICKETS': {
		// 	if (action.payload.filterId === 2) {
		// 		return state.map((ticket) => {
		// 			ticket.display = true;
		// 			if (ticket.location !== action.payload.value && action.payload.currentStatus) {
		// 				ticket.display = !ticket.display;
		// 			}
		// 			return ticket;
		// 		});
		// 	}
		// 	if (action.payload.filterId === 3) {
		// 		return state.map((ticket) => {
		// 			ticket.display = true;
		// 			if (ticket.mechanicalGroup !== action.payload.value && action.payload.currentStatus) {
		// 				ticket.display = !ticket.display;
		// 			}
		// 			return ticket;
		// 		});
		// 	}
		// 	return state;
		// }
		default: {
			return state;
		}
	}
}