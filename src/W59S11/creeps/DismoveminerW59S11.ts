const roleDismveableminer = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById("5bbca9eb9099fc012e6305bd") as Source;
		const continer = Game.getObjectById("64cd2934e3f07ff8ff3122ab") as StructureContainer;
		// const link = creep.pos.findInRange(FIND_STRUCTURES, 1, {
		// 	filter: structure => {
		// 		return structure.structureType === STRUCTURE_CONTAINER;
		// 	}
		// });

		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say("挖中");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			// creep.say('放');
		}
		if (creep.memory.working) {
			if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources, {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 6
				});
			} else if (sources.energy == 0) {
				creep.memory.working = false;
			}
		} else if (!creep.memory.working) {
			creep.say("continer");
			creep.transfer(continer, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
		}
	}
};
export default roleDismveableminer;
