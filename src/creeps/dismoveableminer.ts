const roleDismveableminer = {
    run: function (creep: any) {

        // if (creep.ticksToLive <= 200) {
        //     if (Game.spawns['Spawn1'].renewCreep(creep) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(31, 36)
        //     }else{
        //         for (let i = 0; i < 8; i++) {
        //             Game.spawns['Spawn1'].renewCreep(creep)
        //         }
        //     }
        // } else {
        var sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[1], { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 6 });
        }
    }
}
// }
export default roleDismveableminer
