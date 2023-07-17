const roleremoteAttacker = {
    //I won't show my changes on this file for now


    run: function (creep: any) {
        const targetRoom = "W58S15"
        // const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        const target =Game.getObjectById('64b410979997ce810a50e500')
        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(20, 37, 'W58S15'), { visualizePathStyle: { stroke: '#ff0000' } })
        } else if (creep.room.name === targetRoom) {
            creep.say(creep.attack(target))
            if (target) {
                if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, { visualizePathStyle: { stroke: '#ff0000' } });
                }
            }else{
                creep.moveTo(25,25, { visualizePathStyle: { stroke: '#ff0000' } })
            }
        }
    }
}

export default roleremoteAttacker;
