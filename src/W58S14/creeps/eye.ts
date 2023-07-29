const roleEyeW58S14 = {
    run: function (creep: Creep) {
        const targetRoom = "W59S14"
        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(48, 47, targetRoom), { visualizePathStyle: { stroke: '#ffaa00' } })
        } else {
            creep.moveTo(new RoomPosition(48, 47, targetRoom))

        }
    }
}
export default roleEyeW58S14
