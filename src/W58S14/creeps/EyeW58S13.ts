const roleEyeW58S13 = {
    run: function (creep: Creep) {
        const targetRoom = "W58S13"
        // creep.moveTo(new RoomPosition(33, 48, targetRoom))
        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(33, 48, targetRoom), { visualizePathStyle: { stroke: '#ffaa00' } })
        } else {
            const target = Game.getObjectById('64c2f711d6640dc615d4be73') as StructureInvaderCore
            creep.say(creep.attack(target) as unknown as string)
            if (target) {
                if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, { visualizePathStyle: { stroke: '#ff0000' } });
                }
            } else {
                creep.moveTo(25, 25, { visualizePathStyle: { stroke: '#ff0000' } })
            }

        }
    }
}
export default roleEyeW58S13
