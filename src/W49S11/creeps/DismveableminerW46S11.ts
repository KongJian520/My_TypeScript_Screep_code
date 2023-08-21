export const DismveableminerW49S11 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById("5bbcaa679099fc012e631480") as Source;
		// const link = Game.getObjectById<StructureContainer>("64e1930d45d7ba78c122267e")!;
		const tower = Game.getObjectById<StructureTower>("64e18494ac377c123bae7203")!;
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
			creep.say("tower");
			creep.transfer(tower, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			creep.moveTo(tower);
		}
	}
};
