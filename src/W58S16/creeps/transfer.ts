const roletransfer = {
    /** @param {Creep} creep **/
    runEnergy: function (creep: Creep) {

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
                        // ||structure.sourceLinkId == '64b5d08fd3a05b4f1f6f0325'
                        // ||structure.structureType == STRUCTURE_LINK
                        &&
                        structure.store.energy > 0);
                }
            });
            // 如果找到了 sources
            if (sources.length > 0) {
                sources.sort((a: any, b: any) => b.store.energy - a.store.energy);
                if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
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
                        creep.moveTo(STORAGE, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        }
    },
    runMineral: function (creep: Creep) {
        var sources = Game.getObjectById('5bbcb10940062e4259e92a53') as Mineral
        var Container = Game.getObjectById('64c8cfac58c500a5a104799d') as StructureContainer
        var storage = Game.getObjectById('64ae33b7d36572291f61089a') as StructureStorage
        if (creep.memory.working && creep.store[sources.mineralType] == 0) {
            creep.memory.working = false;
            creep.say('准备拿取资源');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = true;
            creep.say('向仓库移动');
        }
        if (!creep.memory.working) {
            if (creep.withdraw(Container, sources.mineralType) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources)
            }
        } else {
            if (creep.transfer(storage, _.keys(creep.store)[0] as ResourceConstant) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage)
            }
        }
    }
}


export default roletransfer
