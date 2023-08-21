import { WithdrawEnergyFromContainer } from "../../GlobalUtil/utils/WithdrawEnergyFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/StoreSource";

export const TransferW46S12 = {
	run: function (creep: Creep) {
		if (creep.memory.working && creep.store.getUsedCapacity() == 0) {
			creep.memory.working = false;
			creep.say("🔍");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("T 🚚S");
		}
		if (!creep.memory.working) {
			// WithdrawEnergyFromContainer(creep, "64e1111b48e7ca7b71bf5530");
		} else if (creep.memory.working) {
			transferToStore(creep, "64e1bfd97aac6f642206ba76");
		}
	}
};
