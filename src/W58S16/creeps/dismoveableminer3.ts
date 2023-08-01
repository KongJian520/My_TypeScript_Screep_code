const roleDismveableminer3 = {
    run: function (creep: Creep) {
        var sources = Game.getObjectById('5bbcb10940062e4259e92a53') as Mineral
      if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 6 });
            }
        creep.moveTo(25, 12)
    }
}

export default roleDismveableminer3
