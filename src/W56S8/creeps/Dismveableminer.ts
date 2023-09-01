export const Dismoveableminer = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById<Source>("5bbcaa009099fc012e630926")!;
		creep.moveTo(sources);
		const link = Game.getObjectById<StructureLink>("64ea42faf187424606ac1bc5")!;
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
			if (link.hits !== link.hitsMax) {
				creep.repair(link);
			} else {
				creep.say("Link");
				creep.transfer(link, RESOURCE_ENERGY);
			}
		}
	}
};
