const initState = {
	byAlphabet: {
		name: 'By alphabet',
		type: 'switch',
		enabled: true,
		status: 0
	},
	byLocation: {
		name: 'By location',
		type: 'dropdown',
		enabled: true,
		status: 0,
		units: [
			'engine bay',
			'rear lifted',
			'back',
			'body',
			'front'
		]
	},
	byMechanicalGroup: {
		name: 'By mechanical group',
		type: 'dropdown',
		enabled: true,
		status: 0,
		
	},
	byToolsRequired: {
		name: 'By tools required',
		type: 'switch',
		enabled: true,
		status: 0
	},
	byComplexityOfRepair: {
		name: 'By complexity of repair',
		type: 'switch',
		enabled: true,
		status: 0
	},
	byComplexityOfDiagnose: {
		name: 'By complexity of diagnose',
		type: 'switch',
		enabled: true,
		status: 0
	},
	byImportance: {
		name: 'By importance',
		type: 'switch',
		enabled: true,
		status: 0
	}
	bySymptomType: {
		name: 'By symptom type',
		type: 'dropdown',
		enabled: false,
		status: 0
	}
}

export default function (state = initState, action) {
	return state;
}