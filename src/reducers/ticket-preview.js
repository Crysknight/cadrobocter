const initState = {
	tickets: [],
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
		case 'GOT_TICKETS': {
			let newState = {};
			let tickets = action.payload.map(ticket => {
				let newTicket = {};
				newTicket.id = ticket.ticketId;
				newTicket.name = ticket.name;
				newTicket.location = ticket.location === null ? 'ticket error' : ticket.location.name.toLowerCase();
				newTicket.mechanicalGroup = ticket.mechanicalGroup === null ? 'ticket error ' : ticket.mechanicalGroup.name.toLowerCase();
				newTicket.photo = ticket.photoPreview === "" ? 'no-preview.jpg' : ticket.photoPreview;
				newTicket.tools = ticket.diagTools.length === 0 ? [] : ticket.diagTools.map(tool => tool.name);
				newTicket.toolsRequired = ticket.diagTools.length === 0 ? false : true;
				newTicket.imp = ticket.importance;
				newTicket.cod = ticket.complexityOfDiagnose;
				newTicket.cor = ticket.complexityOfRepair;
				newTicket.safety = ticket.safety;
				newTicket.filtered = false;
				return newTicket;
			});
			newState.tickets = tickets;
			newState.alphabetOrder = 'down';
			newState.appliedSorting = undefined;
			newState.appliedSortingOrder = undefined;
			newState.appliedFilters = [];
			newState.tickets.sort(sortTickets(null, null, 'down'));
			return newState;
		}
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

			// Disabled a possibility to choose multiple dropdowns. Uncomment this section and comment the next one to rewind it

			// } else if (filter.type === 'dropdown' && filter.status === 2) {
			// 	for (let i = 0; i < newState.appliedFilters.length; i++) {
			// 		if (newState.appliedFilters[i].name === filter.interestedOf) {
			// 			newState.appliedFilters.splice(i, 1);
			// 			newState.tickets = filterTickets(newState.appliedFilters, newState.tickets);
			// 		}
			// 	}

			// }		

			// Comment this section to rewind a possibility to choose multiple dropdowns

			} else if (filter.type === 'dropdown') {
				newState.appliedFilters = [];
				newState.tickets = filterTickets(newState.appliedFilters, newState.tickets);
			}

			return newState;
		}
		case 'RESET_FILTERS': {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			for (let i = 0; i < newState.tickets.length; i++) {
				newState.tickets[i].filtered = false;
				newState.tickets.sort(sortTickets(null, null, 'down'));
			}
			newState.alphabetOrder = 'down';
			newState.appliedSorting = undefined;
			newState.appliedSortingOrder = undefined;
			newState.appliedFilters = [];
			return newState;
		}
		default: {
			return state;
		}
	}
}