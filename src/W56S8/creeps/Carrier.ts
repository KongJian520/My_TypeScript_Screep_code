import { ChargeStructure } from "../../GlobalUtil/utils/ChargeStruc";
import { WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";

export const Carrier = {
	run: function (creep: Creep) {
		if (creep.memory.working && creep.store.getUsedCapacity() == 0) {
			creep.memory.working = false;
			creep.say("🔍");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("T 🚚S");
		}
		if (creep.memory.working) {
			ChargeStructure(creep);
		} else {
			const target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
				filter: (structure: any) =>
					(structure.structureType === STRUCTURE_LINK ||
						structure.structureType === STRUCTURE_TERMINAL ||
						structure.structureType === STRUCTURE_CONTAINER ||
						structure.structureType === STRUCTURE_STORAGE) &&
					structure.store[RESOURCE_ENERGY] !== 0
			});
			if (target) {
				WithdrawFromContainer(creep, target.id, RESOURCE_ENERGY);
			} else {
				creep.memory.working = true;
			}
		}
	}
};
