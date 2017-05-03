export default function(state = {}, action) {
	switch (action.type) {
		case 'GOT_TICKET': {
			let payload = action.payload;
			let newState = Object.assign({}, state);
			newState.id = payload.ticketId;
			newState.name = payload.name;
			newState.importance = payload.importance;
			newState.complexityOfRepair = payload.complexityOfRepair;
			newState.complexityOfDiagnose = payload.complexityOfDiagnose;
			newState.descriptionLevelOne = payload.descriptionLevelOne;
			newState.location = payload.location.name;
			newState.mechanicalGroup = payload.mechanicalGroup.name;
			newState.causes = payload.causes;
			newState.symptoms = payload.symptoms;
			newState.threats = payload.threats;
			newState.tools = payload.diagTools.map(tool => tool.name);
			newState.tags = [];
			newState.visual = payload.visualLevelOne;
			return newState;
		}
		default: {
			return state;
		}
	}
		// {
		// 	id: 2,
		// 	importance: 2,
		// 	testDifficulty: 1,
		// 	repairDifficulty: 3,
		// 	name: 'Visible Leaks',
		// 	shortDescription: `This problem is very common. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna magna, 
		// 	  a scelerisque tellus placerat ac. Etiam eu maximus diam. Etiam ac odio lectus. Praesent lobortis ex ipsum, ut tristique enim elementum a. 
		// 	  Vivamus semper ut dui sit amet lacinia. Aliquam ac lorem vitae massa faucibus vulputate. Nunc laoreet lorem eu erat molestie, ut mollis eros 
		// 	  posuere. Cras maximus enim in facilisis tempor. Duis facilisis odio id lobortis interdum. Etiam quam odio, sollicitudin nec egestas vel, 
		// 	  dignissim at orci. Fusce nec sagittis nunc. Sed pulvinar magna at sem scelerisque, a tincidunt lectus vehicula. Curabitur id nisi mi. Donec 
		// 	  tempus risus in varius mattis. Maecenas accumsan eros eu mattis ultricies.`,
		// 	location: 'Engine bay',
		// 	mechanicalGroup: 'Engine',
		// 	causes: [
		// 		'age',
		// 		'wrong repair',
		// 		'stupidity'
		// 	],
		// 	symptoms: [
		// 		'water',
		// 		'more water'
		// 	],
		// 	threats: [
		// 		'serious obstruction',
		// 		'cancer',
		// 		'also herpes'
		// 	],
		// 	tools: [],
		// 	tags: [
		// 		'Engine',
		// 		'No tools required'
		// 	],
		// 	photos: [
		// 	],
		// 	videos: [
		// 	]
		// },
		// {
		// 	id: 3,
		// 	importance: 3,
		// 	testDifficulty: 1,
		// 	repairDifficulty: 3,
		// 	name: 'Liquids in Exhaust',
		// 	shortDescription: `The word "Liquids" looks similar to "Squids",
		// 		but squids in exhaust would be more dangerous, wouldn't they?`,
		// 	location: 'Exterior Walkaround',
		// 	mechanicalGroup: 'Engine',
		// 	causes: [
		// 		'not squids',
		// 		'wrong repair',
		// 		'stupidity (probably)'
		// 	],
		// 	symptoms: [
		// 		'liquids',
		// 		'in',
		// 		'exhaust'
		// 	],
		// 	threats: [
		// 		'serious obstruction',
		// 		'Chuck Norris will come for you'
		// 	],
		// 	tools: [],
		// 	tags: [
		// 		'Engine',
		// 		'Easy to diagnose'
		// 	],
		// 	photos: [
		// 	],
		// 	videos: [
		// 	]
		// }
};