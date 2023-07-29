const roleDismveableminer3 = {
    run: function (creep: Creep) {
        var sources = Game.getObjectById('5bbcb10940062e4259e92a53') as Mineral
        var Container = Game.getObjectById('64c3d8b1a2bd10160632f00a') as StructureContainer
        creep.moveTo(25, 12)
        if (!creep.memory.working && creep.store[sources.mineralType] == 0) {
            creep.memory.working = true;
            creep.say('挖中');
        }
        if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = false;
            creep.say('放');
        }
        if (creep.memory.working) {
            if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 6 });
            }
        } else {
            creep.transfer(Container, sources.mineralType);
            creep.say(creep.transfer(Container, sources.mineralType) as unknown as string)
        }
    }
}

export default roleDismveableminer3
