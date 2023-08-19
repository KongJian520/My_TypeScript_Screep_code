const Transfer3W58S16 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById<StructureContainer>("64d71a88ba4a40b1c74ab6df")!;
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("找contianer中");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			this.MoveToStorge(creep);
			creep.say("运输中");
		}
		if (!creep.memory.working) {
			this.MoveToContianer(creep, sources);
			if (sources.store.energy == 0 && creep.store.energy !== 0) {
				creep.memory.working = true;
			}
		} else if (creep.memory.working) {
			this.MoveToStorge(creep);
		}
	},
	MoveToStorge: function (creep: Creep) {
		const STORAGE = Game.getObjectById<StructureStorage>("64ae33b7d36572291f61089a");
		if (STORAGE) {
			if (creep.transfer(STORAGE, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(STORAGE, { visualizePathStyle: { stroke: "#ffffff" } });
			}
		}
	},
	MoveToContianer: function (creep: Creep, sources: StructureContainer) {
		if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			creep.moveTo(sources, { visualizePathStyle: { stroke: "#ffaa00" } });
		}
	}
};

export default Transfer3W58S16;
