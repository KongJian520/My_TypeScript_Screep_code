const roleRemoteRepair = {
    run: function (creep: any) {
        const targetRoom = 'W58S15';
        const Home = 'W58S16';

        if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
            creep.say('RBU 🔄 ');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = true;
            creep.say('🚧 build');
        }
        if (creep.memory.working) {
            if (creep.room.name !== targetRoom) {
                creep.say('Moving')
                creep.moveTo(new RoomPosition(20, 37, targetRoom), {visualizePathStyle: {stroke: '#ff00f6'}, reusePath: 10})
            } else if (creep.room.name === targetRoom) {
                // 检查周围 2 格范围内是否有需要修复的建筑
                const repairTargets = creep.pos.findInRange(FIND_STRUCTURES, 2, {
                    filter: (structure: any) => {
                        return (structure.structureType == STRUCTURE_ROAD && structure.hits < structure.hitsMax)
                    }
                });
                // 如果周围有需要修复的建筑，优先修复它们
                if (repairTargets.length > 0) {
                    repairTargets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);
                    creep.repair(repairTargets[0])
                } else {
                    // 如果周围没有需要修复的建筑，继续之前的逻辑
                    const targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure: any) => {
                            return (
                                (structure.structureType == STRUCTURE_ROAD) && structure.hits < structure.hitsMax
                            )
                        }
                    });
                    targets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);
                    if (targets.length > 0) {
                        if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#f00fff'}, reusePath: 10});
                        }
                    }
                }
            }
        } else {
            if (creep.room.name !== Home) {
                creep.moveTo(new RoomPosition(31, 37, Home))
            } else {
                const sources = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure: any) => {
                        return (structure.structureType == STRUCTURE_STORAGE &&
                            structure.store.energy > 0);
                    }
                });
                // 如果找到了 container
                if (sources.length > 0) {
                    // 使用 pos.findClosestByPath 方法找到距离最近的 container
                    const closestContainer = creep.pos.findClosestByPath(sources);
                    // 如果找到了最近的 container
                    if (closestContainer) {
                        // creep.say('UP 最近的找到了')
                        // 移动到最近的 container 并从中取出能量
                        if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}, reusePath: 10});
                        }
                    }
                }

            }
        }
    }
}

export default roleRemoteRepair;
