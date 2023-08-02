const roleRepairW58S14 = {
    run: function (creep: any) {
        if (creep.memory.working && creep.carry.energy == 0) {
            creep.memory.working = false;
            creep.say('🔄 harvest');
        } else if (!creep.memory.working && creep.memory.target != '' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
            delete creep.memory.source
            creep.say('⬆repair');
        } else if (!creep.memory.working && creep.memory.target == '' && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
            delete creep.memory.source
            creep.say('♻️transfer');
        }
        if (creep.memory.working) {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (
                        (structure.structureType == STRUCTURE_CONTAINER ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_RAMPART ||
                            structure.structureType == STRUCTURE_WALL
                        ) && structure.hits < structure.hitsMax)
                }
            });
            targets.sort((a: any, b: any) => a.hits - b.hits);
            if (targets.length > 0) {
                if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#f00fff'}, reusePath: 10});
                }
            }
        } else {

            const sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}, reusePath: 4});
            }


            const containers = creep.room.find(FIND_STRUCTURES, {
                filter: (s: any) => (
                    // s.structureType == STRUCTURE_CONTAINER ||
                    s.structureType == STRUCTURE_STORAGE
                    && s.store.energy <= s.storeCapacity)
            });
            containers.sort((a: any, b: any) => b.store.energy - a.store.energy);
            if (creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(containers[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
}
export default roleRepairW58S14;
