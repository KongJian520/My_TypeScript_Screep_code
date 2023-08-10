export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "HarvesterW57S9",
		bodyParts: [
			[WORK, 2],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 2,
		priority: 1
	},
	{
		roleName: "Dismveableminer2W57S9",
		bodyParts: [
			[WORK, 4],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "GuardW57S9",
		bodyParts: [
			[MOVE, 1],
			[ATTACK, 2],
			[HEAL, 1]
		],
		expectedCount: 1,
		priority: 51
	},
	{
		roleName: "UpgraderW57S9",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 3,
		priority: 49
	},
	{
		roleName: "BuilderW57S9",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 4,
		priority: 50
	}
];