const roleDismveableminer = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById('5bbca9eb9099fc012e6305b4') as Source;
		const link = creep.room.lookForAt(LOOK_STRUCTURES, 15, 40);
		// const tower = Game.getObjectById<StructureTower>('64c88912658de88bc8d77990')!
		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say('挖中');
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			// creep.say('放');
		}
		if (creep.memory.working) {
			if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources, {
					visualizePathStyle: {stroke: '#ffaa00'},
					reusePath: 6
				});
			}
		} else if (!creep.memory.working) {
			creep.say('Link')
			creep.transfer(link[0], RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
		}
	}
}
export default roleDismveableminer
