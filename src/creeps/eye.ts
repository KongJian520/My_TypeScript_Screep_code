const roleEye = {
    run: function (creep: Creep) {
        const targetRoom = "W58S15"
        if (creep.room.name !== targetRoom) {
            creep.moveTo(new RoomPosition(1,46, 'W58S15'), { visualizePathStyle: { stroke: '#ffaa00' } })
        }else{
            creep.moveTo(new RoomPosition(1,46, 'W58S15'))
        }
    }
}
export default roleEye
