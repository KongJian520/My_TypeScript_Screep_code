const roleDismveableminer = {
	run: function (creep: Creep) {
		// console.log(creep.pos);
		creep.moveTo(20, 36);
		const sources = Game.getObjectById("5bbca9eb9099fc012e6305b8") as Source;
		const continer = Game.getObjectById("64cf8a950ffdb333302d9b1e") as StructureContainer;

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
