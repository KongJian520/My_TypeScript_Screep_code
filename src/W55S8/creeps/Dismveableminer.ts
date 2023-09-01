export const Dismoveableminer = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById<Source>("5bbcaa0c9099fc012e630b55")!;
		creep.moveTo(8, 22);
		const link = Game.getObjectById<StructureLink>("64ef4e39ed8f4ccf96ef1716")!;
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
