export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "DismveableminerW46S12",
		bodyParts: [
			[WORK, 5],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 1
	},
	{
		roleName: "BuilderW46S12",
		bodyParts: [
			[WORK, 4],
			[CARRY, 4],
			[MOVE, 4]
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
			[WORK, 4],
			[CARRY, 4],
			[MOVE, 4]
		],
		expectedCount: 3,
		priority: 51
	},
	{
		roleName: "RemoteBuilderW46S12",
		bodyParts: [
			[WORK, 4],
			[CARRY, 4],
			[MOVE, 4]
		],
		expectedCount: 4,
		priority: 100
	}
];
