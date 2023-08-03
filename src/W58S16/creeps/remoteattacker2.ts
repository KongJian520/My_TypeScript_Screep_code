const roleremoteAttackerW57S13 = {
    run: function (creep: Creep) {
        const targetRoom = "W57S13"

        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(20, 37, targetRoom), {visualizePathStyle: {stroke: '#ff0000'}})
        } else if (creep.room.name === targetRoom) {
            const target: any = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: Structure) => {
                    return (structure.structureType == STRUCTURE_INVADER_CORE)
                }
            })
            target.push(creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS))
            if (target.length > 0) {
                if (creep.attack(target) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ff0000'}});
                }
            } else {
                creep.moveTo(creep.room.controller!, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
}

export default roleremoteAttackerW57S13;
