import { UpgradeControllerByObj } from "../../GlobalUtil/utils/UpgradeControllerByObj";
import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";

export const RemoteUpgrader = {
	run: function (creep: Creep) {
		const targetRoom = "W55S8";
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("RBU 🔄 ");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧 build");
		}
		if (creep.room.name !== targetRoom) {
			creep.say("Moving");
			creep.moveTo(new RoomPosition(20, 37, targetRoom), {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 10
			});
		} else if (creep.room.name === targetRoom) {
			if (creep.memory.working) {
				UpgradeControllerByObj(creep, creep.room.controller);
			} else {
				HarvestSource(creep, "5bbcaa0c9099fc012e630b55");
			}
		}
	}
};
