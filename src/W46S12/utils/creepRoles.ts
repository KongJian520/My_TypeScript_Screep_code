export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	// {
	// 	roleName: "DismveableminerW46S11",
	// 	bodyParts: [
	// 		[WORK, 5],
	// 		[CARRY, 1],
	// 		[MOVE, 2]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 1
	// },
	{
		roleName: "BuilderW46S12",
		bodyParts: [
			[WORK, 2],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 10,
		priority: 50
	},
	{
		roleName: "CollectorW46S12",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 2
	},
	{
		roleName: "UpgraderW46S12",
		bodyParts: [
			[WORK, 2],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 3,
		priority: 51
	}
];
