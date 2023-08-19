import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";

export const HarvesterW46S12 = {
	run(creep: Creep) {
		if (creep.store.getFreeCapacity() == 0) {
			creep.say("H 开始干活");
			creep.memory.working = true;
		} else if (creep.store.energy == 0) {
			creep.say("H 准备充能");
			creep.memory.working = false;
		}
		if (creep.memory.working) {
			HarvestSource(creep, "5bbcaa8b9099fc012e63198c");
		} else {
			const sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(43, 32, {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 4
				});
			}
		}
	}
};
