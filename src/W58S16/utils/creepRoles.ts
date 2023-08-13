export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "harvester",
		bodyParts: [
			[WORK, 1],
			[CARRY, 1],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 1
	},
	{
		roleName: "dismoveableminer",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "dismoveableminer2",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "dismoveabletrasfer",
		bodyParts: [
			[CARRY, 5],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "carrier",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 3
	},
	{
		roleName: "builder",
		bodyParts: [
			[WORK, 10],
			[CARRY, 6],
			[MOVE, 7]
		],
		expectedCount: 1,
		priority: 4
	},
	{
		roleName: "collector",
		bodyParts: [
			[CARRY, 5],
			[MOVE, 5]
		],
		expectedCount: 1,
		priority: 6
	},
	// {
	// 	roleName: "Dismveableminer3",
	// 	bodyParts: [
	// 		[MOVE, 5],
	// 		[WORK, 15]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 7
	// },
	{
		roleName: "transfer",
		bodyParts: [
			[CARRY, 6],
			[MOVE, 6]
		],
		expectedCount: 1,
		priority: 7
	},
	{
		roleName: "upgrader",
		bodyParts: [
			[WORK, 10],
			[CARRY, 6],
			[MOVE, 8]
		],
		expectedCount: 3,
		priority: 8
	},
	{
		roleName: "claim",
		bodyParts: [
			[CLAIM, 2],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 12
	},
	{
		roleName: "Claim2W58S15",
		bodyParts: [
			[CLAIM, 2],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 12
	},
	{
		roleName: "RemoteBuilder",
		bodyParts: [
			[WORK, 9],
			[CARRY, 8],
			[MOVE, 9]
		],
		expectedCount: 1,
		priority: 11
	},
	{
		roleName: "RemoteHavster2W58S16",
		bodyParts: [
			[WORK, 10],
			[CARRY, 8],
			[MOVE, 9]
		],
		expectedCount: 2,
		priority: 11
	},
	{
		roleName: "RemoteHavster",
		bodyParts: [
			[WORK, 11],
			[CARRY, 8],
			[MOVE, 9]
		],
		expectedCount: 2,
		priority: 11
	},
	{
		roleName: "Transfer2W58S16",
		bodyParts: [
			[CARRY, 20],
			[MOVE, 20]
		],
		expectedCount: 3,
		priority: 10
	},
	{
		roleName: "Transfer3W58S16",
		bodyParts: [
			[CARRY, 15],
			[MOVE, 15]
		],
		expectedCount: 1,
		priority: 10
	},
	{
		roleName: "RemoteHavster3W58S16",
		bodyParts: [
			[WORK, 11],
			[CARRY, 8],
			[MOVE, 9]
		],
		expectedCount: 2,
		priority: 11
	},

	// {
	// 	roleName: "LabTransferW58S16",
	// 	bodyParts: [
	// 		[MOVE, 2],
	// 		[CARRY, 2]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 25
	// },
	{
		roleName: "Guard",
		bodyParts: [
			[TOUGH, 5],
			[ATTACK, 6],
			[MOVE, 7],
			[HEAL, 1]
		],
		expectedCount: 1,
		priority: 97
	},
	{
		roleName: "remoteAttackerW57S13",
		bodyParts: [
			[TOUGH, 5],
			[MOVE, 7],
			[ATTACK, 6],
			[HEAL, 1]
		],
		expectedCount: 0,
		priority: 99
	}
	// {
	// 	roleName: "RATTW58S16",
	// 	bodyParts: [
	// 		[TOUGH, 5],
	// 		[MOVE, 8],
	// 		[RANGED_ATTACK, 4],
	// 		[HEAL, 5]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 100
	// }
];
