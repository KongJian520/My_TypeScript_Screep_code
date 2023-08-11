const Transfer3W57S9 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById("64d64646b5f538e742f592a7") as StructureStorage;
		const targets = Game.getObjectById("64d4f8c1a2e7ee0140f84a4b") as StructureContainer;
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("寻找能量");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("运输到up");
		}
		if (!creep.memory.working) {
			if (sources.store.energy !== 0) {
				if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources, {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 10
					});
				}
			} else {
				creep.memory.working = true;
			}
		} else if (creep.memory.working) {
			if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(targets, {
					visualizePathStyle: { stroke: "#ffffff" },
					reusePath: 10
				});
			}
		}
	}
};

export default Transfer3W57S9;
