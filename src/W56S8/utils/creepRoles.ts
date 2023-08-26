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
			[CARRY, 2],
			[MOVE, 1]
		],
		expectedCount: 1,
		priority: 2
	},
	{
		roleName: "Transfer2W56S8",
		bodyParts: [
			[CARRY, 5],
			[MOVE, 4],
			[WORK, 1]
		],
		expectedCount: 2,
		priority: 3
	},
	{
		roleName: "HarvesterW56S8",
		bodyParts: [
			[WORK, 3],
			[CARRY, 1],
			[MOVE, 1]
		],
		expectedCount: 2,
		priority: 4
	},
	{
		roleName: "CarrierW56S8",
		bodyParts: [
			[CARRY, 8],
			[MOVE, 6]
		],
		expectedCount: 1,
		priority: 4
	},
	{
		roleName: "DismoveableminerW56S8",
		bodyParts: [
			[WORK, 10],
			[CARRY, 1],
			[MOVE, 4]
		],
		expectedCount: 1,
		priority: 5
	},
	{
		roleName: "TransferW56S8",
		bodyParts: [
			[CARRY, 10],
			[MOVE, 10],
			[WORK, 1]
		],
		expectedCount: 2,
		priority: 6
	},

	{
		roleName: "ThiefW56S8",
		bodyParts: [
			[CARRY, 12],
			[MOVE, 12],
			[WORK, 1]
		],
		expectedCount: 5,
		priority: 10
	},
	{
		roleName: "UpgraderW56S8",
		bodyParts: [
			[WORK, 10],
			[CARRY, 1],
			[MOVE, 2]
		],
		expectedCount: 2,
		priority: 50
	},
	{
		roleName: "BuilderW56S8",
		bodyParts: [
			[WORK, 7],
			[CARRY, 4],
			[MOVE, 7]
		],
		expectedCount: 3,
		priority: 60
	},
	{
		roleName: "ChaiQianW56S8",
		bodyParts: [
			[WORK, 10],
			[MOVE, 5]
		],
		expectedCount: 2,
		priority: 301
	},
	{
		roleName: "RemoteScavengerW58S6",
		bodyParts: [
			[CARRY, 12],
			[MOVE, 12],
			[WORK, 1]
		],
		expectedCount: 2,
		priority: 302
	}
	// {
	// 	roleName: "SelfHealerW56S8",
	// 	bodyParts: [
	// 		[TOUGH, 5],
	// 		[MOVE, 4],
	// 		[HEAL, 2]
	// 	],
	// 	expectedCount: 1,
	// 	priority: 200
	// }
];
