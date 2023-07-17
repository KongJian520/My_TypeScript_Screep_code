const roleClaim = {
    run: function (creep: any) {
        const targetRoom = 'W58S15';
        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(10, 10, targetRoom), { visualizePathStyle: { stroke: '#ffffff' } })
        } else
            if (creep.room.name === targetRoom) {
                if (creep.room.controller && !creep.room.controller.my) {
                    if (creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }else {
                    if (
                        // creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE ||
                        creep.reserveController(creep.room.controller== ERR_NOT_IN_RANGE )) {
                        creep.moveTo(new RoomPosition(10, 10, targetRoom), { visualizePathStyle: { stroke: '#ffffff' } })
                    }
                }
            }

    }
}
export default roleClaim;
