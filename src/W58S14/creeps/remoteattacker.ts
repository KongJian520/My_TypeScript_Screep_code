const roleremoteAttackerW58S14 = {
    run: function (creep: Creep) {
        const targetRoom = "W57S13"
        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(33, 3, targetRoom), { visualizePathStyle: { stroke: '#ff0000' } })
        }
        if (creep.room.name == targetRoom) {
            var target = creep.room.find(FIND_STRUCTURES, {
                filter: (structure: Structure) => {
                    return (structure.structureType == STRUCTURE_INVADER_CORE)
                }
            });
            target.sort((a: Structure, b: Structure) => a.hitsMax - b.hitsMax);
            var HOSTILE_CREEPS = creep.room.find(FIND_HOSTILE_CREEPS);
            let closestHOSTILE_CREEPS = creep.pos.findClosestByPath(HOSTILE_CREEPS)
            if (target[0]) {
                if (creep.attack(target[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target[0], { visualizePathStyle: { stroke: '#ff0000' } });
                }
            } else
                if (closestHOSTILE_CREEPS) {
                    if (creep.attack(closestHOSTILE_CREEPS) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestHOSTILE_CREEPS, { visualizePathStyle: { stroke: '#ff0000' } });
                    }
                }
                else {
                    creep.moveTo(new RoomPosition(33, 3, targetRoom), { visualizePathStyle: { stroke: '#ff0000' } })
                }
        }
    }
}

export default roleremoteAttackerW58S14
