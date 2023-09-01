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
			WithdrawFromContainer(creep, "64eff1a9a0c2db6dbdebe518", RESOURCE_ENERGY);
			// noMoveWithdrawFromContainer(creep, "64ea9c1a6d28a3d895716c86", RESOURCE_ENERGY);
		}
	}
};
