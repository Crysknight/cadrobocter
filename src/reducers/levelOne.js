export default function() {
	return [
		{
			id: 1,
			importance: 2,
			testDifficulty: 1,
			repairDifficulty: 2,
			name: 'Engine Vibration',
			shortDescription: 'This problem is very common',
			location: 'Exterior Walkaround',
			causes: [
				'age',
				'wrong repair' 
			],
			symptomsAndThreats: {
				symptoms: [
					'clattering',
					'clanking',
					'cancer'
				],
				threats: [
					'serious obstruction',
					'cancer',
					'better fix it'
				]
			},
			tools: [],
			tags: [
				'Engine',
				'No tools required'
			],
			photos: [
			],
			videos: [
			]
		},
		{
			id: 2,
			importance: 2,
			testDifficulty: 1,
			repairDifficulty: 3,
			name: 'Visible Leaks',
			shortDescription: 'This problem is very common',
			location: 'Exterior Walkaround',
			causes: [
				'age',
				'wrong repair',
				'stupidity'
			],
			symptomsAndThreats: {
				symptoms: [
					'water',
					'more water'
				],
				threats: [
					'serious obstruction',
					'cancer',
					'also herpes'
				]
			},
			tools: [],
			tags: [
				'Engine',
				'No tools required'
			],
			photos: [
			],
			videos: [
			]
		},
		{
			id: 3,
			importance: 3,
			testDifficulty: 1,
			repairDifficulty: 3,
			name: 'Liquids in Exhaust',
			shortDescription: `The word "Liquids" looks similar to "Squids",
				but squids in exhaust would be more dangerous, wouldn't they?`,
			location: 'Exterior Walkaround',
			causes: [
				'not squids',
				'wrong repair',
				'stupidity (probably)'
			],
			symptomsAndThreats: {
				symptoms: [
					'liquids',
					'in',
					'exhaust'
				],
				threats: [
					'serious obstruction',
					'Chuck Norris will come for you'
				]
			},
			tools: [],
			tags: [
				'Engine',
				'Easy to diagnose'
			],
			photos: [
			],
			videos: [
			]
		}
	];
}