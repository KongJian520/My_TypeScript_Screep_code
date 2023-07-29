const EXMANW58S14 = {
    run: function (creep: Creep) {
        const targetRoom = 'W57S11'
        creep.moveTo(new RoomPosition(33, 48, targetRoom))
        creep.heal(creep)
    }
}
export default EXMANW58S14
