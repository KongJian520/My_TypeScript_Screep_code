import { WithdrawFromContainer } from "GlobalUtil/utils/WithdrawFromContainer";
import { UpgradeControllerByObj } from "../../GlobalUtil/utils/UpgradeControllerByObj";

export const Upgrader = {
	run: function (creep: Creep) {
		const Home = "W55S8";
		if (creep.room.name !== Home) {
			creep.moveTo(new RoomPosition(10, 10, Home));
		} else {
			if (!this.working(creep)) {
				WithdrawFromContainer(creep, "64eff1a9a0c2db6dbdebe518", RESOURCE_ENERGY);
			} else {
				UpgradeControllerByObj(creep, creep.room.controller);
				// BuildByPath(creep);
			}
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
