const roleHarvesterW58S14 = {
    run(creep: Creep) {
        if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = true;
            creep.say('🔄');
        }
        if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = false;
            creep.say('存放');
        }
        if (creep.memory.working) {
            creep.moveTo(17, 39, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 10 });
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(17, 39, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 10 });
            }
        } else {
            var targets = creep.room.find(FIND_STRUCTURES, {//寻找设施存入 target
                filter: (structure: any) => {
                    return (
                        structure.structureType == STRUCTURE_STORAGE ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTENSION
                    ) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            targets.sort((a: any, b: any) => a.store.energy - b.store.energy);
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' }, reusePath: 4 });//工作运输
                }
            }
        }
    },
};

export default roleHarvesterW58S14;
