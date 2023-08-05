export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "HarvesterW59S11",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 1
	},
	{
		roleName: "CarrierW59S11",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "DismoveminerW59S11",
		bodyParts: [
			[CARRY, 2],
			[MOVE, 2],
			[WORK, 5]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "GuardW59S11",
		bodyParts: [
			// [HEAL,1]
			[TOUGH, 4],
			[MOVE, 2],
			[ATTACK, 4]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "TransferW59S11",
		bodyParts: [
			[CARRY, 5],
			[MOVE, 3]
		],
		expectedCount: 2,
		priority: 3
	},

	{
		roleName: "BuilderW59S11",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 4
	},
	{
		roleName: "UpgraderW59S11",
		bodyParts: [
			[WORK, 3],
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 4
	}
];
