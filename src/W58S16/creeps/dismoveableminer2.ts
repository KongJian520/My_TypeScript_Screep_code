const roleDismveableminer = {
    run: function (creep: any) {
        let sources = Game.getObjectById('5bbca9eb9099fc012e6305bc') as Source;
        let link = Game.getObjectById('64c3dcfa7b156580e8312d07') as StructureLink;
        if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = true;
            creep.say('挖中');
        }
        if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = false;
            creep.say('放');
        }
        if (creep.memory.working) {
            if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}, reusePath: 6});
            }
        } else {
            for (const resourceType in creep.store) {
                const resourceType1 = resourceType as unknown as ResourceConstant;
                creep.transfer(link, resourceType1);
                creep.say(creep.transfer(link, resourceType1) as unknown as string)
            }
        }
    }
}
// }
export default roleDismveableminer
