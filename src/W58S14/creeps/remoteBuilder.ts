import roleRepairW58S14 from "./repair";
const roleRemoteBuilderW58S14 = {
    run: function (creep: any) {
        var targetRoom = 'W59S14';
        var Home = 'W58S14';
        if ((Game.rooms[targetRoom].find(FIND_MY_CONSTRUCTION_SITES).length == 0)) {
            roleRepairW58S14.run(creep)
        } else {
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
                    creep.moveTo(new RoomPosition(20, 37, targetRoom), { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 10 })
                } else if (creep.room.name === targetRoom) {
                    var targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
                    if (targets.length !== 0) {
                        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' }, reusePath: 10 });
                        }
                    }
                }
            }
            else {
                if (creep.room.name !== Home) {
                    creep.moveTo(new RoomPosition(1, 29, Home))
                } else {
                    var sources = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure: any) => {
                            return (structure.structureType == STRUCTURE_STORAGE &&
                                structure.store.energy > 0);
                        }
                    });
                    // 如果找到了 container
                    if (sources.length > 0) {
                        // 使用 pos.findClosestByPath 方法找到距离最近的 container
                        var closestContainer = creep.pos.findClosestByPath(sources);
                        // 如果找到了最近的 container
                        if (closestContainer) {
                            // creep.say('UP 最近的找到了')
                            // 移动到最近的 container 并从中取出能量
                            if (creep.withdraw(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(closestContainer);
                            }
                        }
                    }
                    if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                }
            }
        }
        // if (Game.rooms["W58S15"].find(FIND_CONSTRUCTION_SITES).length == 0){
        // 	creep.memory.role = 'remoteHavster'
        // }

    },
};
export default roleRemoteBuilderW58S14
