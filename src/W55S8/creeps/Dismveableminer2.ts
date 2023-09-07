import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";
import { noMoveBuildByPath } from "../../GlobalUtil/utils/BuildByPath";

export const Dismoveableminer2 = {
	run: function (creep: Creep) {
		creep.moveTo(8, 11);
		const link = Game.getObjectById<StructureLink>("64f1ddb4dda06b79709dd430")!;
		// const tower = Game.getObjectById<StructureTower>("64dced3773b2a9971ec2edde")!;
		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say("挖中");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
		}
		if (creep.memory.working) {
			HarvestSource(creep, "5bbcaa0c9099fc012e630b54");
		} else if (!creep.memory.working) {
			if (link.hits !== link.hitsMax) {
				creep.repair(link);
			} else {
				creep.say("Link");
				creep.transfer(link, RESOURCE_ENERGY);
			}

			noMoveBuildByPath(creep);
		}
	}
};
