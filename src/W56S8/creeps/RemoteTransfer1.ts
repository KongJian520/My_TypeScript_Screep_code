import { noMoveWithdrawFromContainer, WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
import { transferToStore } from "../../GlobalUtil/utils/transferToStore";
import { noMoveRepairStructure } from "../../GlobalUtil/utils/NoMoveRepairStructure";
import { noMoveBuildByPath } from "../../GlobalUtil/utils/BuildByPath";

export const RemoteTransfer1 = {
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
			creep.moveTo(new RoomPosition(36, 25, "W57S8"));
			if (creep.room.name === "W57S8") {
				WithdrawFromContainer(creep, "64f9b0a52da3be7c8ca1506f", RESOURCE_ENERGY);
			}
		} else {
			transferToStore(creep, "64ee86f9566ad7b44419b7b9");
		}
	}
};
