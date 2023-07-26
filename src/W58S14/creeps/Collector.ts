const roleCollectorW58S14 = {
    run: function (creep: any) {
        // 如果creep没有能量，且房间内有掉落的资源或者墓碑
        if (creep.store.getUsedCapacity() == 0 && (
            creep.room.find(FIND_DROPPED_RESOURCES).length > 0 ||
            creep.room.find(FIND_TOMBSTONES, { filter: (t: any) => t.store.energy > 0 }).length > 0 ||
            creep.room.find(FIND_RUINS, { filter: (t: any) => t.store.energy > 0 }).length > 0)) {
            // 设置creep的状态为获取能量
            creep.memory.working = false;
        }
        // 如果creep有能量，且房间内有storage或者termin
        else if (creep.store.getUsedCapacity() > 0 && creep.room.find(FIND_STRUCTURES, {
            filter: (s: any) =>
                s.structureType == STRUCTURE_CONTAINER
                || s.structureType == STRUCTURE_STORAGE
                || s.structureType == STRUCTURE_TERMINAL
        }).length > 0) {
            // 设置creep的状态为送能量
            creep.memory.working = true;
        }
        // 如果creep的状态为获取能量
        if (!creep.memory.working) {
            // 寻找最近的掉落的资源或者墓碑
            var source = creep.pos.findClosestByPath(FIND_RUINS, { filter: (t: any) => t.store.energy > 0 })
                || creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES)
                || creep.pos.findClosestByPath(FIND_TOMBSTONES, {
                    filter: (t: any) => t.store.getUsedCapacity(RESOURCE_ENERGY) > 0
                });

            // 如果找到了资源或者墓碑
            if (source != undefined) {
                creep.say('找到能量了')
                // 尝试从资源或者墓碑中取出能量
                if (creep.pickup(source) == ERR_NOT_IN_RANGE
                    || creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // 如果不在范围内，就向资源或者墓碑移动
                    creep.say('移动中')
                    creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            } else {
                if (creep.store.getUsedCapacity() == 0) {
                    if (creep.pos.pos !== 16, 32) {
                        creep.moveTo(16, 32)
                    }
                }else{
                    creep.memory.working = true
                }
            }
        }
        // 如果creep的状态为送能量
        else {

            // creep.say('Working')

            var target = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (
                        structure.structureType == STRUCTURE_STORAGE ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTRACTOR) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            target.sort((a: any, b: any) => a.store.energy - b.store.energy);
            // 寻找最近的storage或者terminal
            // 如果找到了目标
            if (target != undefined) {
                // 尝试向目标转移能量
                var pickupedSource = _.keys(creep.store)
                if (creep.transfer(target[0], pickupedSource[0]) == ERR_NOT_IN_RANGE) {
                    // 如果不在范围内，就向目标移动
                    creep.moveTo(target[0], { visualizePathStyle: { stroke: '#ffffff' } });
                } else if (creep.transfer(target[0], pickupedSource[0]) == 0) {
                    for (const resourceType in creep.carry) {
                        creep.transfer(target[0], resourceType);
                    }
                }
            } else {
                creep.say('未发现目标或目标不可达')
                creep.moveTo(15, 28)
            }
        }
    }
};
export default roleCollectorW58S14;
