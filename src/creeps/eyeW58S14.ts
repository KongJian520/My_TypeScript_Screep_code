const roleEyeW58S14 = {
    run: function (creep: Creep) {
        const targetRoom = "W58S14"
        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(24,48, targetRoom), { visualizePathStyle: { stroke: '#ffaa00' } })
        }else{
            creep.moveTo(new RoomPosition(24,48, targetRoom))
        }
    }
}
export default roleEyeW58S14
