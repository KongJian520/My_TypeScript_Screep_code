export type BodyPartConstantTuple = [BodyPartConstant, number];

export interface RoleDefinition {
    roleName: string;
    bodyParts: BodyPartConstantTuple[];
    expectedCount: number;
    priority: number;
}

export const roleDefinitions: RoleDefinition[] = [
    {
        roleName: "HarvesterW58S14",
        bodyParts: [
            [WORK, 1],
            [CARRY, 1],
            [MOVE, 2],
        ],
        expectedCount: 1,
        priority: 1,
    },
    {
        roleName: "DismveableminerW58S14",
        bodyParts: [
            [WORK, 10],
            [CARRY, 2],
            [MOVE, 1],
        ],
        expectedCount: 1,
        priority: 2,
    },
    {
        roleName: "Dismveableminer2W58S14",
        bodyParts: [
            [WORK, 10],
            [CARRY, 2],
            [MOVE, 1],
        ],
        expectedCount: 1,
        priority: 2,
    },
    {
        roleName: "dismoveabletrasferW58S14",
        bodyParts: [
            [CARRY, 5],
            [MOVE, 1],
        ],
        expectedCount: 1,
        priority: 2,
    },
    {
        roleName: "CarrierW58S14",
        bodyParts: [
            [CARRY, 4],
            [MOVE, 2],
        ],
        expectedCount: 2,
        priority: 3,
    },
    {
        roleName: "CollectorW58S14",
        bodyParts: [
            [CARRY, 4],
            [MOVE, 2],
        ],
        expectedCount: 1,
        priority: 5,
    },

    {
        roleName: "transferW58S14",
        bodyParts: [
            [CARRY, 4],
            [MOVE, 2],
        ],
        expectedCount: 2,
        priority: 5,
    },
    {
        roleName: "RepairW58S14",
        bodyParts: [
            [WORK, 8],
            [CARRY, 6],
            [MOVE, 7],
        ],
        expectedCount: 1,
        priority: 6,
    },
    {
        roleName: "UpgraderW58S14",
        bodyParts: [
            [WORK, 8],
            [CARRY, 6],
            [MOVE, 6],
        ],
        expectedCount: 1,
        priority: 8,
    },
    {
        roleName: "BuilderW58S14",
        bodyParts: [
            [WORK, 8],
            [CARRY, 6],
            [MOVE, 6],
        ],
        expectedCount: 1,
        priority: 11,
    },
    {
        roleName: "RepairW58S14",
        bodyParts: [
            [WORK, 8],
            [CARRY, 8],
            [MOVE, 9],
        ],
        expectedCount: 1,
        priority: 11,
    },
    {
        roleName: "EyeW58S14",
        bodyParts: [
            [ATTACK, 2],
            [MOVE, 4],
        ],
        expectedCount: 1,
        priority: 93,
    },
    {
        roleName: "EyeW58S13",
        bodyParts: [
            [ATTACK, 2],
            [MOVE, 4],
        ],
        expectedCount: 1,
        priority: 93,
    },
    {
        roleName: "claimW58S13",
        bodyParts: [
            [CLAIM, 2],
            [MOVE, 4],
        ],
        expectedCount: 1,
        priority: 94,
    },
    {
        roleName: "claimW58S14",
        bodyParts: [
            [CLAIM, 2],
            [MOVE, 4],
        ],
        expectedCount: 1,
        priority: 94,
    },
    {
        roleName: "RemoteHavsterW58S14",
        bodyParts: [
            [WORK, 8],
            [CARRY, 6],
            [MOVE, 6],
        ],
        expectedCount: 2,
        priority: 95,
    },
    // {
    //   roleName: "RemoteHavster2",
    //   bodyParts: [
    //     [WORK, 10],
    //     [CARRY, 10],
    //     [MOVE, 8],
    //   ],
    //   expectedCount: 2,
    //   priority: 11,
    // },
    {
        roleName: "RemoteBuilderW58S14",
        bodyParts: [
            [WORK, 8],
            [CARRY, 8],
            [MOVE, 8],
        ],
        expectedCount: 1,
        priority: 96,
    },
    {
        roleName: "RemoteBuilder2W58S14",
        bodyParts: [
            [WORK, 8],
            [CARRY, 8],
            [MOVE, 8],
        ],
        expectedCount: 1,
        priority: 96,
    },
    {
        roleName: "RemoteRepairW58S14",
        bodyParts: [
            [WORK, 8],
            [CARRY, 8],
            [MOVE, 8],
        ],
        expectedCount: 1,
        priority: 96,
    },
    // {
    //     roleName: "RemoteAttackerW58S14",
    //     bodyParts: [
    //         [TOUGH, 5],
    //         [ATTACK, 6],
    //         [MOVE, 7],
    //     ],
    //     expectedCount: 1,
    //     priority: 97,
    // }, {
    //     roleName: "RemoteAttackerW58S14",
    //     bodyParts: [
    //         [TOUGH, 5],
    //         [ATTACK, 6],
    //         [MOVE, 7],
    //     ],
    //     expectedCount: 1,
    //     priority: 97,
    // },

];
