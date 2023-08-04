import DismoveminerW59S11 from "../creeps/DismoveminerW59S11";

export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "HarvesterW59S11",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 1
	},
	{
		roleName: "CarrierW59S11",
		bodyParts: [
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "BuilderW59S11",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 2
	},
	{
		roleName: "UpgraderW59S11",
		bodyParts: [
			[WORK, 2],
			[CARRY, 2],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 3
	}
];
