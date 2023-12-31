export const DismveableminerW46S11 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById("5bbcaa8b9099fc012e63198d") as Source;
		const link = Game.getObjectById<StructureContainer>("64e4bc92c0f1ea1d6f1c8f05")!;
		const tower = Game.getObjectById<StructureTower>("64e09a9fba4a4057bc4ce216")!;
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
			if (tower.store.getUsedCapacity(RESOURCE_ENERGY) <= 600) {
				creep.say("Tower");
				creep.transfer(tower, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			} else if (tower.store.getUsedCapacity(RESOURCE_ENERGY) > 500) {
				creep.say("Link");
				creep.transfer(link, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			}
		}
	}
};
