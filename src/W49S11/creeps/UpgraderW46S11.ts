import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";
import { WithdrawEnergyFromContainer } from "../../GlobalUtil/utils/WithdrawEnergyFromContainer";

export const UpgraderW49S11 = {
	run: function (creep: Creep) {
		// if (this.boostIfNeeded(creep)) {
		// 	return;
		// }

		if (!this.working(creep)) {
			// HarvestSource(creep, "5bbcaa8b9099fc012e63198c");
			WithdrawEnergyFromContainer(creep, "64e15632c1476ec785e2ac9f");
		} else {
			this.upgradeController(creep);
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
	},

	upgradeController: function (creep: Creep): void {
		const controller = creep.room.controller;
		if (controller && creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
			creep.moveTo(controller, {
				visualizePathStyle: { stroke: "#ffffff" },
				reusePath: 10
			});
		}
	}
};
