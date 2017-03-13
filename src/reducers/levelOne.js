export default function() {
	return [
		{
			id: 1,
			importance: 2,
			repairDifficulty: 3,
			testDifficulty: 1,
			name: 'Car problem 1',
			shortDescription: 'This problem is very common',
			causes: [
				'age',
				'wrong repair' 
			],
			symptomsAndThreats: {
				symptoms: [
					'knacking',
					'tinking'
				],
				threats: [
					'serious obstruction',
					'cancer'
				]
			},
			photos: [
				'src1',
				'src2'
			],
			videos: [
				'src1',
				'src2'
			]
		},
		{
			id: 2,
			first: 'Nick',
			last: 'Kuznetsov',
			age: 'unknown'
		}
	];
}