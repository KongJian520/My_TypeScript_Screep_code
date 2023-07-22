const roleDismveableminer = {
    run: function (creep: any) {
            creep.moveTo(31,43, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 10 });
            const source = Game.getObjectById('5bbca9eb9099fc012e6305b5')as Source
            creep.harvest(source)
            // var sources = creep.room.find(FIND_SOURCES);
            // if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            //     creep.moveTo(42, 33, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 6 });
            // }

        }
    }
// }
export default roleDismveableminer
