const roleHarvester = {
    run(creep: any) {
        if (creep.ticksToLive <= 100) {
            if (Game.spawns['Spawn1'].renewCreep(creep) == ERR_NOT_IN_RANGE) {
                creep.moveTo(31, 36)
            }
        } else {
            if (creep.memory.working) {
                creep.moveTo(43, 32, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 4 });
                var targets = creep.room.find(FIND_STRUCTURES, {//寻找设施存入 target
                    filter: (structure: any) => {
                        return (
                            // structure.structureType == STRUCTURE_STORAGE
                            // ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_EXTENSION
                        ) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
                if (targets.length > 0) {
                    if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' }, reusePath: 4 });//工作运输
                    }
                }
                if (creep.store.energy == 0) {
                    creep.say('H 准备充能')
                    creep.memory.working = false
                }
            } else {
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(43, 32, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 4 });
                }
                if (creep.store.getFreeCapacity() == 0) {
                    creep.say('H 开始干活')
                    creep.memory.working = true
                }
            }
            // if(creep.store.getFreeCapacity()==0&&Game.spawns['Spwan1'].store.getFreeCapacity(RESOURCE_ENERGY) == 300&&_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester').length>2){
            //     creep.say("turning");
            //     creep.memory.role = 'builder'
            // }
            //
        }
    },
};

export default roleHarvester;
