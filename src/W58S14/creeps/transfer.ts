const roletransferW58S14 = {
    /** @param {Creep} creep **/
    run: function (creep: any) {
        const Home = "W58S14"
        if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
            creep.say('找contianer中');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = true;
            creep.say('运输中');
        }
        if (!creep.memory.working) {
            var sources = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (structure.structureType == STRUCTURE_CONTAINER
                            // ||structure.structureType == STRUCTURE_LINK
                            &&
                        structure.store.energy > 0);
                }
            });
            // 如果找到了 sources
            if (sources.length > 0) {
                sources.sort((a: any, b: any) => b.store.energy - a.store.energy);
                if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
                }
                // 使用 pos.findClosestByPath 方法找到距离最近的 container
                // var closestContainer = creep.pos.findClosestByPath(sources);
                // // 如果找到了最近的 container
                // if (closestContainer) {
                //     // creep.say('UP 最近的找到了')
                //     // 移动到最近的 container 并从中取出能量
                //     if (creep.withdraw(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                //         creep.moveTo(closestContainer, { visualizePathStyle: { stroke: '#ffffff' } });
                //     }
            }
        } else if (creep.memory.working) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (structure.structureType == STRUCTURE_STORAGE) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targets.length > 0) {
                var STORAGE = creep.pos.findClosestByPath(targets);
                if (STORAGE) {
                    if (creep.transfer(STORAGE, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(STORAGE, { visualizePathStyle: { stroke: '#ffffff' } });
                    }
                }
            }
        }
    }
}



export default roletransferW58S14
