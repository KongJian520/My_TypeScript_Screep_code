
const roleCarrier = {
    run: function (creep: Creep) {
        if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
            creep.say('🔄');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = true;
            creep.say('working');
        }
        if (creep.memory.working) {
            var targets = creep.room.find(FIND_MY_STRUCTURES, {
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
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                }
            }
        } else {
            var sources = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (
                        structure.structureType == STRUCTURE_STORAGE ||
                        structure.structureType == STRUCTURE_CONTAINER
                        &&
                        structure.store.energy > 0);
                }
            });
            // 如果找到了 container
            if (sources.length > 0) {
                // 使用 pos.findClosestByPath 方法找到距离最近的 container
                var closestContainer = creep.pos.findClosestByPath(sources);
                // 如果找到了最近的 container
                if (closestContainer) {
                    if (creep.withdraw(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestContainer);
                    }
                }
            } else {
                creep.memory.working = true;
            }
            if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        }
    }
};
export default roleCarrier;