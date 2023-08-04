const roleGuard = {
    run(creep: Creep) {
        const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
        if (target !== null) {
            if (creep.attack(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ff0000'}});
            }
        } else {
            // creep.say('移动到控制器！！')
            creep.moveTo(creep.room.controller!, {visualizePathStyle: {stroke: '#ffffff'}});
        }
    },
};

export default roleGuard;
