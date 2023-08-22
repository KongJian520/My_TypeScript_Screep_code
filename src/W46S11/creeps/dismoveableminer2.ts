export const Dismoveableminer2W46S11 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById<Source>("5bbcaa8b9099fc012e63198c")!;
		creep.moveTo(38, 9);
		const link = Game.getObjectById<StructureContainer>("64e04c079548e7bfd521e3ea")!;
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
				// creep.say("Link");
				if (creep.transfer(link, RESOURCE_ENERGY) == ERR_FULL) {
					creep.upgradeController(creep.room.controller!);
				}
			}
		}
	}
};
