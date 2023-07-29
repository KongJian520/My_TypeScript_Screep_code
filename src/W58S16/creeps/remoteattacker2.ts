
const roleremoteAttackerW57S13 = {
    run: function (creep: Creep) {
        const targetRoom = "W57S13"
        // const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(20, 37, targetRoom), { visualizePathStyle: { stroke: '#ff0000' } })
        } else if (creep.room.name === targetRoom) {
            const target = Game.rooms[targetRoom].find(FIND_STRUCTURES, {
                filter: (structure: Structure) => {
                    return (structure.structureType == STRUCTURE_INVADER_CORE)
                }
            })
            creep.say(creep.attack(target[0]) as unknown as string)
            if (target) {
                if (creep.attack(target[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target[0], { visualizePathStyle: { stroke: '#ff0000' } });
                }
            } else {
                creep.moveTo(25, 25, { visualizePathStyle: { stroke: '#ff0000' } })
            }
        }
    }
}

export default roleremoteAttackerW57S13;
