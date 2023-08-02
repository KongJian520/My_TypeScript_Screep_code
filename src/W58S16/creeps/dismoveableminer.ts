const roleDismveableminer = {
  run: function (creep: Creep) {
    const sources = Game.getObjectById('5bbca9eb9099fc012e6305bd') as Source;
    const link = creep.room.lookForAt(LOOK_STRUCTURES, 17, 36);
    const tower = Game.getObjectById<StructureTower>('64c88912658de88bc8d77990')
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
        creep.moveTo(sources, {
          visualizePathStyle: {stroke: '#ffaa00'},
          reusePath: 6
        });
      }
    } else {
      if (tower) {
        if (tower.store.getCapacity(RESOURCE_ENERGY) !== 0) {

          creep.transfer(link[0], RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY] / 2);
          creep.say(creep.transfer(link[0], RESOURCE_ENERGY) as unknown as string)

        } else {
          creep.transfer(tower, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY] / 2);
        }
      }

    }
  }
}
export default roleDismveableminer
