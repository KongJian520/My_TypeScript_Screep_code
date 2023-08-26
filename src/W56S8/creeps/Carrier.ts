import { WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
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
			WithdrawFromContainer(creep, "64e870f7d3acba1ba87f72ac", RESOURCE_ENERGY);
		}
	}
};
