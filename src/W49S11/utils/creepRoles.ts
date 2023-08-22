export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
	roleName: string;
	bodyParts: BodyPartConstantTuple[];
	expectedCount: number;
	priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
	{
		roleName: "CarrierW49S11",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 1
	},
	{
		roleName: "TransferW49S11",
		bodyParts: [
			[CARRY, 4],
			[MOVE, 2]
		],
		expectedCount: 1,
		priority: 1
	},
	{
		roleName: "BuilderW49S11",
		bodyParts: [
			[WORK, 4],
			[CARRY, 4],
			[MOVE, 4]
		],
		expectedCount: 3,
		priority: 50
	},
	{
		roleName: "DismveableminerW49S11",
		bodyParts: [
			[WORK, 10],
			[CARRY, 2],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 1
	}
];
