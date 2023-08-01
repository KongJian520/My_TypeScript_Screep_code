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
            [MOVE, 2],
        ],
        expectedCount: 1,
        priority: 1,
    },
    {
        roleName: "dismoveableminer",
        bodyParts: [
            [WORK, 10],
            [CARRY, 2],
            [MOVE, 1],
        ],
        expectedCount: 1,
        priority: 2,
    },
    {
        roleName: "dismoveableminer2",
        bodyParts: [
            [WORK, 10],
            [CARRY, 2],
            [MOVE, 1],
        ],
        expectedCount: 1,
        priority: 2,
    },

    {
        roleName: "dismoveabletrasfer",
        bodyParts: [
            [CARRY, 5],
            [MOVE, 1],
        ],
        expectedCount: 1,
        priority: 2,
    },
    {
        roleName: "carrier",
        bodyParts: [
            [CARRY, 8],
            [MOVE, 5],
        ],
        expectedCount: 1,
        priority: 3,
    },
    {
        roleName: "repair",
        bodyParts: [
            [WORK, 8],
            [CARRY, 6],
            [MOVE, 6],
        ],
        expectedCount: 1,
        priority: 4,
    },
    {
        roleName: "builder",
        bodyParts: [
            [WORK, 16],
            [CARRY, 10],
            [MOVE, 10],
        ],
        expectedCount: 1,
        priority: 4,
    },
    {
        roleName: "collector",
        bodyParts: [
            [CARRY, 5],
            [MOVE, 5],
        ],
        expectedCount: 1,
        priority: 6,
    },
    {
        roleName: "Dismveableminer3",
        bodyParts: [
            [MOVE, 5],
            [WORK, 15],

        ],
        expectedCount: 1,
        priority: 7,
    },
    {
        roleName: "transfer",
        bodyParts: [
            [CARRY, 6],
            [MOVE, 6],
        ],
        expectedCount: 1,
        priority: 7,
    },
    {
        roleName: "upgrader",
        bodyParts: [
            [WORK, 10],
            [CARRY, 6],
            [MOVE, 6],
        ],
        expectedCount: 2,
        priority: 8,
    },
    {
        roleName: "claim",

        bodyParts: [
            [CLAIM, 2],
            [MOVE, 4],
        ],
        expectedCount: 2,
        priority: 12,
    },
    {
        roleName: "remoteHavster",

        bodyParts: [
            [WORK, 18],
            [CARRY, 10],
            [MOVE, 10],
        ],
        expectedCount: 2,
        priority: 12,

    },
    {
        roleName: "RemoteHavster2",
        bodyParts: [
            [WORK, 10],
            [CARRY, 8],
            [MOVE, 8],
        ],
        expectedCount: 2,
        priority: 12,
    },
    {
        roleName: "RemoteRepair",
        bodyParts: [
            [WORK, 10],
            [CARRY, 8],
            [MOVE, 8],
        ],
        expectedCount: 1,
        priority: 13,
    },
    {
        roleName: "RemoteBuilder",
        bodyParts: [
            [WORK, 10],
            [CARRY, 8],
            [MOVE, 9],
        ],
        expectedCount: 1,
        priority: 11,
    },
    {
        roleName: "attacker",
        bodyParts: [
            [TOUGH, 5],
            [ATTACK, 6],
            [MOVE, 7],
        ],
        expectedCount: 1,
        priority: 97,
    },
    {
        roleName: "RemoteAttackerW58S14",
        bodyParts: [
            [TOUGH, 5],
            [ATTACK, 6],
            [MOVE, 7],
        ],
        expectedCount: 1,
        priority: 99,
    },
    {
        roleName: "ChaiQian",
        bodyParts: [
            [MOVE, 9],
            [WORK, 9],
        ],
        expectedCount: 3,
        priority: 98,
    },
];

// 将角色定义按优先级从小到大排序

