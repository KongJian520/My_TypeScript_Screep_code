import { WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/transferToStore";

export const Transfer3W46S11 = {
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
			WithdrawFromContainer(creep, "64e0954ba2e7eef395fb2f55");
		} else if (creep.memory.working) {
			transferToStore(creep, "64e1527a054f113997c1aa2a");
		}
	}
};
