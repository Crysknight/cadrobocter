const initState = {
	byAlphabet: {
		type: 'switch'
	},
	byLocation: {
		type: 'dropdown',
		units: [
			'engine bay',
			'rear lifted',
			'back',
			'body',
			'front'
		]
	},
	byMechanicalGroup: {
		type: 'dropdown'
	},
	byToolsRequired: {
		type: 'switch'
	},
	byComplexityOfRepair: {
		type: 'switch'
	},
	byComplexityOfDiagnose: {
		type: 'switch'
	},
	byImportance: {
		type: 'switch'
	}
}

export default function (state = initState, action) {
	return state;
}