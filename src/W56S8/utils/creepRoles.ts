import { RemoteTransfer1 } from "../creeps/RemoteTransfer1";

export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "HarvesterW56S8",
		bodyParts: [
			[WORK, 2],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 2,
		priority: 1
	},
	{
		roleName: "Dismoveableminer2W56S8",
		bodyParts: [
			[WORK, 10],
			[CARRY, 4],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 2
	},

	{
		roleName: "HarvesterW56S8",
		bodyParts: [
			[WORK, 2],
			[CARRY, 4],
			[MOVE, 5]
		],
		expectedCount: 2,
		priority: 4
	},
	{
		roleName: "CarrierW56S8",
		bodyParts: [
			[CARRY, 15],
			[MOVE, 15],
			[WORK, 1]
		],
		expectedCount: 1,
		priority: 4
	},
	{
		roleName: "DismoveableminerW56S8",
		bodyParts: [
			[WORK, 10],
			[CARRY, 4],
			[MOVE, 6]
		],
		expectedCount: 1,
		priority: 5
	},
	{
		roleName: "TransferW56S8",
		bodyParts: [
			[CARRY, 25],
			[MOVE, 25]
		],
		expectedCount: 1,
		priority: 6
	},
	{
		roleName: "ScavengerW58S6",
		bodyParts: [
			[CARRY, 5],
			[MOVE, 5],
			[WORK, 1]
		],
		expectedCount: 1,
		priority: 10
	},

	{
		roleName: "UpgraderW56S8",
		bodyParts: [
			[WORK, 10],
			[CARRY, 10],
			[MOVE, 10]
		],
		expectedCount: 1,
		priority: 50
	},
	{
		roleName: "BuilderW56S8",
		bodyParts: [
			[WORK, 10],
			[CARRY, 10],
			[MOVE, 10]
		],
		expectedCount: 1,
		priority: 60
	},

	// {
	// 	roleName: "GuardW55S8",
	// 	bodyParts: [
	// 		[MOVE, 5],
	// 		[ATTACK, 5],
	// 		[MOVE, 2],
	// 		[HEAL, 2]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 200
	// },
	{
		roleName: "ClaimW57S8",
		bodyParts: [
			[CLAIM, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 300
	},
	// {
	// 	roleName: "RemoteBuilder1W57S8",
	// 	bodyParts: [
	// 		[WORK, 10],
	// 		[CARRY, 5],
	// 		[MOVE, 10]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 301
	// },
	// {
	// 	roleName: "RemoteTransfer1W56S8",
	// 	bodyParts: [
	// 		[CARRY, 15],
	// 		[MOVE, 15],
	// 		[WORK, 1]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 301
	// },
	{
		roleName: "ThiefW56S8",
		bodyParts: [
			[CARRY, 20],
			[MOVE, 21],
			[WORK, 1]
		],
		expectedCount: 1,
		priority: 400
	},
	{
		roleName: "ClaimW57S9",
		bodyParts: [
			[CLAIM, 2],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 300
	}
];
