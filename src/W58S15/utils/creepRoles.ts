export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "HarvesterW58S15",
		bodyParts: [
			[WORK, 2],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 1
	},
	{
		roleName: "DismoveminerW58S15",
		bodyParts: [
			[CARRY, 1],
			[MOVE, 1],
			[WORK, 4]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "Dismveableminer2W58S15",
		bodyParts: [
			[CARRY, 1],
			[MOVE, 1],
			[WORK, 4]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "TransferW58S15",
		bodyParts: [
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 2
	},
	{
		roleName: "Transfer2W58S15",
		bodyParts: [
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "CarrierW58S15",
		bodyParts: [
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 3
	},
	{
		roleName: "UpgraderW58S15",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 6,
		priority: 4
	},
	{
		roleName: "BuilderW58S15",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 3,
		priority: 5
	}

	// {
	// 	roleName: "remoteBuilder2W58S7",
	// 	bodyParts: [
	// 		[WORK, 3],
	// 		[CARRY, 1],
	// 		[MOVE, 3]
	// 	],
	// 	expectedCount: 4,
	// 	priority: 6
	// },
	// {
	// 	roleName: "ClaimW58S15",
	// 	bodyParts: [
	// 		[CLAIM, 1],
	// 		[MOVE, 3]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 5
	// },
	// {
	// 	roleName: "GuardW58S15",
	// 	bodyParts: [
	// 		[MOVE, 1],
	// 		[ATTACK, 1],
	// 		[HEAL, 1]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 1
	// }
	// {
	// 	roleName: "RemoteHarvesterW58S15",
	// 	bodyParts: [
	// 		[WORK, 3],
	// 		[CARRY, 3],
	// 		[MOVE, 3]
	// 	],
	// 	expectedCount: 6,
	// 	priority: 90
	// }
];
