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
			[CARRY, 2],
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
			[CARRY, 10],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "carrier",
		bodyParts: [
			[CARRY, 10],
			[MOVE, 10]
		],
		expectedCount: 2,
		priority: 3
	},
	{
		roleName: "claim",
		bodyParts: [
			[CLAIM, 4],
			[MOVE, 6]
		],
		expectedCount: 1,
		priority: 12
	},
	{
		roleName: "Claim2W58S15",
		bodyParts: [
			[CLAIM, 4],
			[MOVE, 6]
		],
		expectedCount: 1,
		priority: 12
	},
	{
		roleName: "RemoteBuilderW58S15",
		bodyParts: [
			[WORK, 9],
			[CARRY, 8],
			[MOVE, 9]
		],
		expectedCount: 1,
		priority: 11
	},
	{
		roleName: "RemoteBuilderW58S17",
		bodyParts: [
			[WORK, 12],
			[CARRY, 10],
			[MOVE, 10]
		],
		expectedCount: 1,
		priority: 11
	},
	{
		roleName: "RemoteHavsterW58S16",
		bodyParts: [
			[WORK, 12],
			[CARRY, 10],
			[MOVE, 10]
		],
		expectedCount: 1,
		priority: 11
	},
	{
		roleName: "RemoteHavster2W58S16",
		bodyParts: [
			[WORK, 12],
			[CARRY, 10],
			[MOVE, 10]
		],
		expectedCount: 3,
		priority: 11
	},
	{
		roleName: "Transfer3W58S16",
		bodyParts: [
			[CARRY, 15],
			[MOVE, 15]
		],
		expectedCount: 1,
		priority: 12
	},
	{
		roleName: "BuilderW58S16",
		bodyParts: [
			[WORK, 10],
			[CARRY, 10],
			[MOVE, 10]
		],
		expectedCount: 1,
		priority: 50
	},
	// {
	// 	roleName: "UpgraderW58S16",
	// 	bodyParts: [
	// 		[WORK, 10],
	// 		[CARRY, 20],
	// 		[MOVE, 10]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 50
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
	// 		[TOUGH, 10],
	// 		[MOVE, 5],
	// 		[RANGED_ATTACK, 5],
	// 		[HEAL, 5],
	// 		[MOVE, 5],
	// 		[HEAL, 5],
	// 		[MOVE, 3]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 100
	// },
	// {
	// 	roleName: "SelfH",
	// 	bodyParts: [
	// 		[MOVE, 15],
	// 		[HEAL, 19]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 100
	// }
];
