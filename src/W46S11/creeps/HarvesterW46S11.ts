import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";

export const HarvesterW46S11 = {
	run(creep: Creep) {
		if (creep.store.getFreeCapacity() == 0) {
			creep.say("H 开始干活");
			creep.memory.working = true;
		} else if (creep.store.energy == 0) {
			creep.say("H 准备充能");
			creep.memory.working = false;
		}
		if (!creep.memory.working) {
			HarvestSource(creep, "5bbcaa8b9099fc012e63198c");
		} else {
			const closestTarget = creep.pos.findClosestByPath(
				creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) =>
						(structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
						structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
				})
			);

			if (closestTarget) {
				if (creep.transfer(closestTarget, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
					creep.moveTo(closestTarget, { visualizePathStyle: { stroke: "#ffffff" } });
				}
			}
		}
	}
};
