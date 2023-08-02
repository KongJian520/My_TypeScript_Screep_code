const roleThief = {
    run: function (creep: Creep) {
        const targetsRoom = 'W58S16'
        const Home = 'W58S14'
        if (!creep.memory.working && (creep.store[RESOURCE_ENERGY] == 0)) {
            creep.memory.working = true;
            creep.say('偷东西中。。');
        }
        if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = false;
            creep.say('往回搬');
        }
        if (creep.memory.working) {
            if (creep.room.name !== targetsRoom) {
                creep.moveTo(new RoomPosition(10, 30, targetsRoom))
            } else if (creep.room.name === targetsRoom) {
                const sources = creep.room.storage;
                if (sources) {
                    const pickupedSource = _.keys(sources.store);
                    if (creep.withdraw(sources, "energy") == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}, reusePath: 6});
                        creep.say('Finded')
                    } else {
                        creep.say(creep.withdraw(sources, RESOURCE_ENERGY) as unknown as string)
                    }
                    //  else if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_ENOUGH_RESOURCES) {
                    //     creep.memory.working = false
                    // }
                }
            }
        } else {
            if (creep.room.name !== Home) {
                creep.moveTo(new RoomPosition(10, 30, Home), {visualizePathStyle: {stroke: '#ffaa00'}, reusePath: 6})
            } else if (creep.room.name === Home) {
                const targets = creep.room.storage;
                if (targets) {
                    for (const resourceType in creep.store) {
                        if (creep.transfer(targets, resourceType as ResourceConstant) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}, reusePath: 6});
                        }
                    }
                }
                // if (targets) {
                //     if (creep.transfer(targets, source[0]) == ERR_NOT_IN_RANGE) {
                //         creep.moveTo(targets, { visualizePathStyle: { stroke: '#ffffff' }, reusePath: 6 });
                //     }
                // }
            }
        }
    }
}
export default roleThief
