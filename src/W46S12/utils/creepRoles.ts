import { TransferW46S12 } from "../creeps/TransferW46S12";

export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "HarvesterW46S12",
		bodyParts: [
			[WORK, 2],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 1
	},
	// {
	// 	roleName: "DismveableminerW46S12",
	// 	bodyParts: [
	// 		[WORK, 4],
	// 		[CARRY, 1],
	// 		[MOVE, 1]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 1
	// },
	{
		roleName: "Dismoveableminer2W46S12",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 1
	},
	// {
	// 	roleName: "Transfer2W46S12",
	// 	bodyParts: [
	// 		[CARRY, 4],
	// 		[MOVE, 2]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 5
	// },
	{
		roleName: "CarrierW46S12",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 5
	},
	// {
	// 	roleName: "TransferW46S12",
	// 	bodyParts: [
	// 		[CARRY, 4],
	// 		[MOVE, 2]
	// 	],
	// 	expectedCount: 3,
	// 	priority: 10
	// },
	{
		roleName: "BuilderW46S12",
		bodyParts: [
			[WORK, 5],
			[CARRY, 4],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 50
	},
	{
		roleName: "UpgraderW46S12",
		bodyParts: [
			[WORK, 3],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 3,
		priority: 51
	}
];
