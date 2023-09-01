import { Transfer } from "../creeps/Transfer";

export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "HarvesterW55S8",
		bodyParts: [
			[WORK, 2],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 1
	},
	{
		roleName: "DismoveableminerW55S8",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "TransferW55S8",
		bodyParts: [
			[MOVE, 10],
			[CARRY, 9],
			[WORK, 1]
		],
		expectedCount: 2,
		priority: 11
	},
	{
		roleName: "CarrierW55S8",
		bodyParts: [
			[MOVE, 10],
			[CARRY, 9],
			[WORK, 1]
		],
		expectedCount: 1,
		priority: 5
	},
	{
		roleName: "Dismoveableminer2W55S8",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "BuilderW55S8",
		bodyParts: [
			[MOVE, 5],
			[CARRY, 5],
			[WORK, 5]
		],
		expectedCount: 3,
		priority: 200
	},
	{
		roleName: "UpgraderW55S8",
		bodyParts: [
			[MOVE, 5],
			[CARRY, 5],
			[WORK, 5]
		],
		expectedCount: 3,
		priority: 300
	}
];
