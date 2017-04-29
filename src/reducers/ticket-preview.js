const initState = {
	tickets: [
		{
			id: 1,
			name: 'Engine vibration',
			location: 'test-drive',
			mechanicalGroup: 'engine',
			photo: 'tp-1.jpg',
			toolsComplexity: 0,
			tools: [
				'wrench',
				'screwdriver'
			],
			imp: 2,
			cor: 2,
			cod: 1,
			safety: true,
			filtered: false
		},
		{
			id: 2,
			name: 'Visible Leaks',
			location: 'engine bay',
			mechanicalGroup: 'engine',
			photo: 'tp-2.jpg',
			toolsComplexity: 0,
			tools: [
				'wrench'
			],
			imp: 2,
			cor: 3,
			cod: 1,
			safety: false,
			filtered: false
		},
		{
			id: 3,
			name: 'Liquids in Exhaust',
			location: 'exterior walkaround',
			mechanicalGroup: 'engine',
			photo: 'tp-3.jpg',
			toolsComplexity: 0,
			tools: [
				'screwdriver'
			],
			imp: 3,
			cor: 3,
			cod: 1,
			safety: true,
			filtered: false
		},
		{
			id: 4,
			name: 'Broken part 1',
			location: 'rear - lifted',
			mechanicalGroup: 'transmission',
			photo: 'tp-4.jpg',
			toolsComplexity: 2,
			tools: [
				'wrench',
				'screwdriver',
				'medium toolkit'
			],
			imp: 3,
			cor: 2,
			cod: 3,
			safety: true,
			filtered: false
		},
		{
			id: 5,
			name: 'Broken part 2',
			location: 'engine bay',
			mechanicalGroup: 'transmission',
			photo: 'tp-5.jpg',
			toolsComplexity: 5,
			tools: [
				'medium toolkit'
			],
			imp: 3,
			cor: 2,
			cod: 1,
			safety: false,
			filtered: false
		},
		{
			id: 6,
			name: 'Broken part 3',
			location: 'engine bay',
			mechanicalGroup: 'pipes',
			photo: 'tp-6.jpg',
			toolsComplexity: 7,
			tools: [
				'allen keys',
				'wrench',
				'screwdriver'
			],
			imp: 3,
			cor: 3,
			cod: 1,
			safety: true,
			filtered: false
		},
		{
			id: 7,
			name: 'Exhaust falls off',
			location: 'rear - lifted',
			mechanicalGroup: 'exhaust',
			photo: 'tp-7.jpg',
			toolsComplexity: 3,
			tools: [
				'wrench',
				'screwdriver'
			],
			imp: 2,
			cor: 2,
			cod: 1,
			safety: true,
			filtered: false
		},
		{
			id: 8,
			name: 'Corporative leaks',
			location: 'engine bay',
			mechanicalGroup: 'interior',
			photo: 'tp-8.jpg',
			toolsComplexity: 2,
			tools: [
				'wrench',
				'screwdriver'
			],
			imp: 3,
			cor: 1,
			cod: 3,
			safety: true,
			filtered: false
		},
		{
			id: 9,
			name: 'Cut brake fluid line',
			location: 'rear - lifted',
			mechanicalGroup: 'pipes',
			photo: 'tp-9.jpg',
			toolsComplexity: 7,
			tools: [
				'wrench'
			],
			imp: 3,
			cor: 3,
			cod: 1,
			safety: true,
			filtered: false
		},
		{
			id: 10,
			name: 'Warp engine clinking',
			location: 'engine bay',
			mechanicalGroup: 'engine',
			photo: 'tp-10.jpg',
			toolsComplexity: 100,
			tools: [
				'alien toolkit'
			],
			imp: 2,
			cor: 3,
			cod: 1,
			safety: false,
			filtered: false
		},
		{
			id: 11,
			name: 'Broken part 4',
			location: 'engine bay',
			mechanicalGroup: 'brakes',
			photo: 'tp-11.jpg',
			toolsComplexity: 5,
			tools: [
				'wrench',
				'screwdriver'
			],
			imp: 2,
			cor: 2,
			cod: 2,
			safety: true,
			filtered: false
		},
		{
			id: 12,
			name: 'Rust',
			location: 'exterior walkaround',
			mechanicalGroup: 'body & paint',
			photo: 'tp-12.jpg',
			toolsComplexity: 3,
			tools: [
				'wrench'
			],
			imp: 1,
			cor: 1,
			cod: 1,
			safety: true,
			filtered: false
		},
		{
			id: 13,
			name: 'Broken part 5',
			location: 'rear - lifted',
			mechanicalGroup: 'exhaust',
			photo: 'tp-13.jpg',
			toolsComplexity: 0,
			tools: [
				'screwdriver'
			],
			imp: 2,
			cor: 1,
			cod: 1,
			safety: false,
			filtered: false
		},
		{
			id: 14,
			name: 'Broken luck amulet',
			location: 'front - lifted',
			mechanicalGroup: 'interior',
			photo: 'tp-14.png',
			toolsComplexity: 0,
			tools: [],
			imp: 1,
			cor: 1,
			cod: 1,
			safety: true,
			filtered: false
		},
		{
			id: 15,
			name: 'Broken heart',
			location: 'engine bay',
			mechanicalGroup: 'engine',
			photo: 'tp-15.jpg',
			toolsComplexity: 8,
			tools: [],
			imp: 2,
			cor: 3,
			cod: 1,
			safety: true,
			filtered: false
		},
		{
			id: 16,
			name: 'Broken part 6',
			location: 'front - lifted',
			mechanicalGroup: 'glass',
			photo: 'tp-16.jpg',
			toolsComplexity: 0,
			tools: [
				'wrench'
			],
			imp: 1,
			cor: 2,
			cod: 1,
			safety: false,
			filtered: false
		},
		{
			id: 17,
			name: 'Invisible leaks',
			location: 'engine bay',
			mechanicalGroup: 'engine',
			photo: 'tp-17.jpg',
			toolsComplexity: 0,
			tools: [
				'medium toolkit'
			],
			imp: 3,
			cor: 3,
			cod: 3,
			safety: true,
			filtered: false
		}
	],
	alphabetOrder: 'down',
	appliedSorting: undefined,
	appliedSortingOrder: undefined,
	appliedFilters: []
}


// Sorts tickets according to order argument, which can be either 'up' or 'down'. It takes ticket[criteria] properties and compares them to sort tickets.
// Also, if ticket[criteria] are equal, it compares equal tickets by alphabet, taking an argument 'alphabetOrder', which can be either 'up' or 'down'.
let sortTickets = (criteria, order, alphabetOrder) => (a, b) => {
	if (!criteria) {
		if (alphabetOrder === 'down') {
			if (a.name > b.name) return 1;
			if (a.name < b.name) return -1;
		}
		if (alphabetOrder === 'up') {
			if (a.name > b.name) return -1;
			if (a.name < b.name) return 1;
		}
	}
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
};

let filterTickets = (filtersArray, ticketsArray) => {
	for (let i = 0; i < ticketsArray.length; i++) {
		ticketsArray[i].filtered = false;
	}
	for (let i = 0; i < filtersArray.length; i++) {
		for (let j = 0; j < ticketsArray.length; j++) {
			if (ticketsArray[j][filtersArray[i].name] !== filtersArray[i].value) {
				ticketsArray[j].filtered = true;
			}
		}
	}
	return ticketsArray;
};

export default function (state = initState, action) {
	switch (action.type) {
		case 'CHOOSE_DROPDOWN': {
			let filter = action.payload.filter;
			let unit = action.payload.unit;
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.appliedFilters.push({
				name: filter.interestedOf,
				value: unit
			});
			newState.tickets = filterTickets(newState.appliedFilters, newState.tickets);
			return newState;
		}
		case 'TRIGGER_FILTER': {
			console.log(action.payload);
			let filter = action.payload.filter;
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			// Here is what happens to be an official hack - because action sends a previous state of the filter, I have to consider it in the code below: 
			// it means that the status 0 becomes status 2, status 1 becomes status 0 etc. Same thing with alphabet. Maybe will fix it later.
			if (filter.name === 'By alphabet') {
				if (filter.status === 2) {
					newState.alphabetOrder = 'down';
					newState.tickets.sort(sortTickets(newState.appliedSorting, newState.appliedSortingOrder, newState.alphabetOrder));
				} else if (filter.status === 1) {
					newState.alphabetOrder = 'up';
					newState.tickets.sort(sortTickets(newState.appliedSorting, newState.appliedSortingOrder, newState.alphabetOrder));
				} else {
					console.log('error in trigger_filter: by alphabet filter cannot have another status but 1 or 2');
				}
			} else if (filter.type === 'direction') {
				switch (filter.status) {
					case 2: {
						newState.appliedSorting = undefined;
						newState.appliedSortingOrder = undefined;
						newState.tickets.sort(sortTickets(newState.appliedSorting, newState.appliedSortingOrder, newState.alphabetOrder));
						break;
					}
					case 0: {
						newState.appliedSorting = filter.interestedOf;
						newState.appliedSortingOrder = 'down';
						newState.tickets.sort(sortTickets(newState.appliedSorting, newState.appliedSortingOrder, newState.alphabetOrder));
						break;
					}
					case 1: {
						newState.appliedSorting = filter.interestedOf;
						newState.appliedSortingOrder = 'up';
						newState.tickets.sort(sortTickets(newState.appliedSorting, newState.appliedSortingOrder, newState.alphabetOrder));
						break;
					}
					default: {
						console.log('error in trigger_filter: direction can have values of 0, 1 or 2');
					}
				}
			} else if (filter.type === 'dropdown' && filter.status === 2) {
				for (let i = 0; i < newState.appliedFilters.length; i++) {
					if (newState.appliedFilters[i].name === filter.interestedOf) {
						newState.appliedFilters.splice(i, 1);
						newState.tickets = filterTickets(newState.appliedFilters, newState.tickets);
					}
				}

			}
			return newState;
		}
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