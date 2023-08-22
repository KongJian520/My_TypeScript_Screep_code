export const DismveableminerW46S12 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById("5bbcaa8b9099fc012e631991") as Source;
		const Link = Game.getObjectById<StructureContainer>("64e42a229e0a0e497634a16c")!;
		const tower = Game.getObjectById<StructureTower>("64e4375b98ddac96d3120169")!;
		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say("挖中");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			// creep.say('放');
		}
		if (creep.memory.working) {
			creep.moveTo(sources, {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 6
			});
			creep.harvest(sources);
			if (sources.energy == 0) {
				creep.memory.working = false;
			}
		} else if (!creep.memory.working) {
			if (tower.store.getUsedCapacity(RESOURCE_ENERGY) <= 600) {
				creep.say("Tower");
				creep.transfer(tower, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			} else if (tower.store.getUsedCapacity(RESOURCE_ENERGY) > 500) {
				creep.say("Link");
				creep.transfer(Link, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			}
		}
	}
};
