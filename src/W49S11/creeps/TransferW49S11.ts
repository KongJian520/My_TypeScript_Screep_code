import { WithdrawEnergyFromContainer } from "../../GlobalUtil/utils/WithdrawEnergyFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/StoreSource";

export const TransferW49S11 = {
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
			WithdrawEnergyFromContainer(creep, "64e1930d45d7ba78c122267e");
		} else if (creep.memory.working) {
			transferToStore(creep, "64e186cee209004f9d0867ef");
		}
	}
};
