import { WithdrawEnergyFromContainer } from "../../GlobalUtil/utils/WithdrawEnergyFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/StoreSource";

export const TransferW49S11 = {
	run: function (creep: Creep) {
		if (!creep.memory.working && creep.store.getUsedCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🔍");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say("T 🚚S");
		}
		if (creep.memory.working) {
			WithdrawEnergyFromContainer(creep, "64e18494ac377c123bae7203");
		} else {
			transferToStore(creep, "64e3a735be752fbcae3d0ceb");
		}
	}
};
