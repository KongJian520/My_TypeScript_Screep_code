import { noMoveWithdrawFromContainer, WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/transferToStore";
import { noMoveRepairStructure } from "../../GlobalUtil/utils/NoMoveRepairStructure";
import { noMoveBuildByPath } from "../../GlobalUtil/utils/BuildByPath";

export const Transfer2 = {
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
			WithdrawFromContainer(creep, "64e77273cb1220198a4bcd2e", RESOURCE_ENERGY);
			noMoveWithdrawFromContainer(creep, "64ea9c1a6d28a3d895716c86", RESOURCE_ENERGY);
		} else {
			transferToStore(creep, "64e870f7d3acba1ba87f72ac");
			noMoveRepairStructure(creep);
			noMoveBuildByPath(creep);
		}
	}
};
