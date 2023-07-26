const roleRemoteHavster2 = {
    run: function (creep: Creep) {
        var targetRoom = 'W58S15';
        var Home = 'W58S16';
        if ((Game.rooms["W58S15"].find(FIND_HOSTILE_CREEPS).length > 0)) {
            creep.moveTo(19, 4, (Home as MoveToOpts))
        } else {

            if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
                creep.memory.working = true;
                creep.say('RH 挖矿');
            }
            if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
                creep.memory.working = false;
                creep.say('RH 存');
            }
            if (creep.memory.working) {
                if (creep.room.name !== targetRoom) {
                    creep.moveTo(new RoomPosition(20, 37, 'W58S15'), { visualizePathStyle: { stroke: '#ffaa00' } })
                } else if (creep.room.name === targetRoom) {
                    var sources = Game.getObjectById('5bbca9eb9099fc012e6305b9') as Source
                    creep.say(creep.harvest(sources) as unknown as string)
                    if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 10 });
                    }

                }
            } else if (!creep.memory.working) {
                if (creep.room.name !== Home) {
                    creep.moveTo(new RoomPosition(31, 37, 'W58S16'), { reusePath: 10 })
                } else {
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (
                                // structure.structureType == STRUCTURE_CONTAINER||
                                structure.structureType == STRUCTURE_STORAGE) &&
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                        }
                    });
                    if (targets.length > 0) {
                        var closestContainer = creep.pos.findClosestByPath(targets);
                        if (closestContainer) {
                            // creep.say('RH 最近的找到了')
                            // 移动到最近的 container 并从中放入能量
                            if (creep.transfer(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(closestContainer, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 10 });

                            }
                        }
                    }

                }
            }
        }
    }
}

export default roleRemoteHavster2
