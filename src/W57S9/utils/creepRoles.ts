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
		expectedCount: 1,
		priority: 1
	},
	{
		roleName: "CarrierW57S9",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 2
	},
	{
		roleName: "TransferW57S9",
		bodyParts: [
			[CARRY, 6],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "Transfer2W57S9",
		bodyParts: [
			[CARRY, 6],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "DismveableminerW57S9",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "Dismveableminer2W57S9",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "GuardW57S9",
		bodyParts: [
			[MOVE, 4],
			[ATTACK, 5],
			[HEAL, 2]
		],
		expectedCount: 1,
		priority: 51
	},
	{
		roleName: "Transfer3W57S9",
		bodyParts: [
			[CARRY, 5],
			[MOVE, 3]
		],
		expectedCount: 2,
		priority: 48
	},
	{
		roleName: "UpgraderW57S9",
		bodyParts: [
			[WORK, 9],
			[CARRY, 2],
			[MOVE, 5]
		],
		expectedCount: 2,
		priority: 49
	},
	{
		roleName: "BuilderW57S9",
		bodyParts: [
			[WORK, 8],
			[CARRY, 41],
			[MOVE, 6]
		],
		expectedCount: 2,
		priority: 50
	}
];
