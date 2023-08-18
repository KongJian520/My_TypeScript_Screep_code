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
			[CARRY, 2],
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
		expectedCount: 2,
		priority: 3
	},

	{
		roleName: "Transfer2W57S9",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 6
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
		roleName: "GuardW57S9",
		bodyParts: [
			[MOVE, 4],
			[ATTACK, 5],
			[HEAL, 1]
		],
		expectedCount: 1,
		priority: 38
	},
	{
		roleName: "GuardW56S8",
		bodyParts: [
			[MOVE, 5],
			[ATTACK, 5],
			[MOVE, 4],
			[ATTACK, 4],
			[MOVE, 1],
			[HEAL, 1]
		],
		expectedCount: 1,
		priority: 47
	},
	{
		roleName: "BuilderW57S9",
		bodyParts: [
			[WORK, 10],
			[CARRY, 8],
			[MOVE, 8]
		],
		expectedCount: 1,
		priority: 50
	},
	{
		roleName: "Transfer3W57S9",
		bodyParts: [
			[CARRY, 6],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 51
	},
	{
		roleName: "UpgraderW57S9",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 8]
		],
		expectedCount: 2,
		priority: 55
	},

	{
		roleName: "ClaimW56S8",
		bodyParts: [
			[CLAIM, 2],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 59
	},
	// {
	// 	roleName: "EnergyTransfer1W56S8",
	// 	bodyParts: [
	// 		[CARRY, 15],
	// 		[MOVE, 15],
	// 		[WORK, 1]
	// 	],
	// 	expectedCount: 3,
	// 	priority: 61
	// },
	// {
	// 	roleName: "RemoteHavsterW56S8",
	// 	bodyParts: [
	// 		[WORK, 8],
	// 		[CARRY, 1],
	// 		[MOVE, 8]
	// 	],
	// 	expectedCount: 2,
	// 	priority: 60
	// },
	// {
	// 	roleName: "RemoteBuilderW56S8",
	// 	bodyParts: [
	// 		[WORK, 6],
	// 		[CARRY, 6],
	// 		[MOVE, 6]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 59
	// },
	{
		roleName: "RemoteBuilderW57S8",
		bodyParts: [
			[WORK, 6],
			[CARRY, 6],
			[MOVE, 6]
		],
		expectedCount: 1,
		priority: 61
	}
];
