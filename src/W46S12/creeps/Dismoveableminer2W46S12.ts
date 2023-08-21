export const Dismoveableminer2W46S12 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById<Source>("5bbcaa8b9099fc012e63198f")!;
		creep.moveTo(sources);
		const link = Game.getObjectById<StructureLink>("64e35ec18251010ee01a5e14")!;
		// const tower = Game.getObjectById<StructureTower>("64dced3773b2a9971ec2edde")!;
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
			// if (tower.store.getUsedCapacity(RESOURCE_ENERGY) <= 800) {
			// 	creep.say("Tower");
			// 	creep.transfer(tower, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			// } else if (tower.store.getUsedCapacity(RESOURCE_ENERGY) > 10) {
			if (link.hits !== link.hitsMax) {
				creep.repair(link);
			} else {
				creep.say("Link");
				creep.transfer(link, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			}
			// }
		}
	}
};
