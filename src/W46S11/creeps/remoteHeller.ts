const roleHealerW58S16 = {
    run: function (creep: Creep) {
        let targetRoom = 'W57S12'
        const target = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteAttackerW58S14');
        creep.moveTo(target[0]);
        if (target) {
            creep.moveTo(new RoomPosition(33, 3, targetRoom), { visualizePathStyle: { stroke: '#ff0000' } })
            if (creep.pos.isNearTo(target[0])) {
                creep.moveTo(target[0]);
                creep.heal(target[0]);
            }
            else {
                creep.moveTo(target[0]);
                creep.rangedHeal(target[0]);
            }
        } else {
            creep.moveTo(new RoomPosition(33, 3, targetRoom), { visualizePathStyle: { stroke: '#ff0000' } })
        }
        // const target = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteAttackerW58S14' && creep.hits < creep.hitsMax);
        // if (creep.heal(target[0]) == ERR_NOT_IN_RANGE) {
        //     creep.moveTo(target[0])
        // }
    }
}
export default roleHealerW58S16
