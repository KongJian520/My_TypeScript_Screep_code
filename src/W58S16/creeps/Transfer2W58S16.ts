const Transfer2W58S16 = {
	run: function (creep: Creep) {
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("找contianer中");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("运输中");
		}
		if (!creep.memory.working) {
			const sources = Game.getObjectById<StructureContainer>("64d736d24098bd8a93431c7e")!;
			// 如果找到了 sources
			if (sources.store.energy > 0) {
				if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources, { visualizePathStyle: { stroke: "#ffaa00" } });
				}
			} else {
				creep.memory.working = true;
			}
		} else if (creep.memory.working) {
			const STORAGE = Game.getObjectById<StructureStorage>("64ae33b7d36572291f61089a");
			if (STORAGE) {
				if (creep.transfer(STORAGE, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(STORAGE, { visualizePathStyle: { stroke: "#ffffff" } });
				}
			}
		}
	}
};

export default Transfer2W58S16;
