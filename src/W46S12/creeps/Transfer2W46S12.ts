import { WithdrawEnergyFromContainer } from "../../GlobalUtil/utils/WithdrawEnergyFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/StoreSource";

export const Transfer2W46S12 = {
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
			WithdrawEnergyFromContainer(creep, "64e15632c1476ec785e2ac9f");
		} else if (creep.memory.working) {
			transferToStore(creep, "64e1bfd97aac6f642206ba76");
		}
	}
};
