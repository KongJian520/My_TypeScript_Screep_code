import { WithdrawFromContainer } from "GlobalUtil/utils/WithdrawFromContainer";
import { UpgradeControllerByObj } from "../../GlobalUtil/utils/UpgradeControllerByObj";

export const Upgrader = {
	run: function (creep: Creep) {
		// if (this.boostIfNeeded(creep)) {
		// 	return;
		// }

		if (!this.working(creep)) {
			WithdrawFromContainer(creep, "64e870f7d3acba1ba87f72ac", RESOURCE_ENERGY);
			// HarvestSource(creep, "5bbcaa009099fc012e630924");
		} else {
			UpgradeControllerByObj(creep, creep.room.controller);
		}
	},

	working: function (creep: Creep): boolean {
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
			creep.memory.working = false;
			creep.say("🔄");
		}

		if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
			creep.memory.working = true;
			creep.say("Uping");
		}

		return creep.memory.working;
	}
};
