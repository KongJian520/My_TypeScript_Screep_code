
const roleCarrier = {
    run: function (creep: any) {

        if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
            creep.say('🔄');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = true;
            creep.say('working');
        }
        if (creep.memory.working) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN
                    ) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            targets.sort((a: any, b: any) => a.store.energy - b.store.energy);
            var closesttargets = creep.pos.findClosestByPath(targets)
            if (closesttargets) {
                if (creep.transfer(closesttargets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closesttargets, { visualizePathStyle: { stroke: '#ffffff' } });
                }
            }
        } else {
            var sources = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (
                        structure.structureType == STRUCTURE_STORAGE &&
                        structure.store.energy > 0);
                }
            });
            // 如果找到了 container
            if (sources.length > 0) {
                if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources);
                }
            } else {
                creep.memory.working = true;
            }
            // var containers =
            //   creep.room.find(FIND_STRUCTURES, {
            //     filter: (s: any) => (
            //       s.structureType == STRUCTURE_CONTAINER &&
            //       s.store.energy > 200)
            //   });
            if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        }
    }
};
export default roleCarrier;
