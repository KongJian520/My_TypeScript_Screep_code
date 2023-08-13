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
		roleName: "DismoveTransferW57S9",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "CarrierW57S9",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 4
	},

	{
		roleName: "Transfer2W57S9",
		bodyParts: [
			[CARRY, 6],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 4
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
		priority: 4
	},

	{
		roleName: "Transfer4W57S9",
		bodyParts: [
			[CARRY, 10],
			[MOVE, 10]
		],
		expectedCount: 1,
		priority: 38
	},
	{
		roleName: "RemoteHavsterW58S16",
		bodyParts: [
			[WORK, 5],
			[CARRY, 8],
			[MOVE, 8]
		],
		expectedCount: 2,
		priority: 40
	},
	{
		roleName: "RemoteBuilderW56S8",
		bodyParts: [
			[WORK, 6],
			[CARRY, 6],
			[MOVE, 6]
		],
		expectedCount: 1,
		priority: 40
	},
	{
		roleName: "Transfer3W57S9",
		bodyParts: [
			[CARRY, 6],
			[MOVE, 2]
		],
		expectedCount: 1,
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
		priority: 55
	},
	{
		roleName: "BuilderW57S9",
		bodyParts: [
			[WORK, 8],
			[CARRY, 4],
			[MOVE, 6]
		],
		expectedCount: 2,
		priority: 50
	},
	{
		roleName: "GuardW57S9",
		bodyParts: [
			[MOVE, 4],
			[ATTACK, 5],
			[HEAL, 1]
		],
		expectedCount: 1,
		priority: 51
	},
	{
		roleName: "ClaimW57S9",
		bodyParts: [
			[CLAIM, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 39
	},
	{
		roleName: "GuardW56S8",
		bodyParts: [
			[TOUGH, 5],
			[MOVE, 4],
			[ATTACK, 4],
			[HEAL, 1]
		],
		expectedCount: 1,
		priority: 38
	}
];
