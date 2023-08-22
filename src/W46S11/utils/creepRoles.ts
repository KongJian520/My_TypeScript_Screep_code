import { HarvesterW46S11 } from "../creeps/HarvesterW46S11";

export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "HarvesterW46S11",
		bodyParts: [
			[WORK, 2],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 2,
		priority: 1
	},
	{
		roleName: "Dismoveableminer2W46S11",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 3]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "DismveableminerW46S11",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 4
	},
	{
		roleName: "CarrierW46S11",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 4,
		priority: 2
	},
	{
		roleName: "Transfer3W46S11",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 2
	},
	// {
	// 	roleName: "ScavengerW46S11",
	// 	bodyParts: [
	// 		[CARRY, 10],
	// 		[MOVE, 3]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 3
	// },
	{
		roleName: "BuilderW46S11",
		bodyParts: [
			[WORK, 4],
			[CARRY, 4],
			[MOVE, 4]
		],
		expectedCount: 5,
		priority: 50
	},
	{
		roleName: "UpgraderW46S11",
		bodyParts: [
			[WORK, 6],
			[CARRY, 6],
			[MOVE, 4]
		],
		expectedCount: 3,
		priority: 51
	}
];
