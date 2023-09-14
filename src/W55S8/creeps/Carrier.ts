import { noMoveWithdrawFromContainer, WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
import { ChargeStructure } from "../../GlobalUtil/utils/ChargeStruc";

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
			const structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
				filter: (s: any) =>
					(s.structureType === STRUCTURE_CONTAINER ||
						s.structureType === STRUCTURE_STORAGE ||
						s.structureType === STRUCTURE_LINK) &&
					s.store.getUsedCapacity(RESOURCE_ENERGY) > 0
			});
			if (structure) {
				WithdrawFromContainer(creep, structure.id, RESOURCE_ENERGY);
			}
			// noMoveWithdrawFromContainer(creep, "64ea9c1a6d28a3d895716c86", RESOURCE_ENERGY);
		}
	}
};
