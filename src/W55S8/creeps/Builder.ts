import { WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";
import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";
import { UpgradeControllerByObj } from "../../GlobalUtil/utils/UpgradeControllerByObj";

export const Builder = {
	run: function (creep: Creep) {
		const targetRoom = "W55S8";
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("BU 🔄 ");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧");
		}

		if (creep.room.name !== targetRoom) {
			creep.say("Moving");
			creep.moveTo(new RoomPosition(20, 37, targetRoom), {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 10
			});
		} else if (creep.room.name === targetRoom) {
			if (creep.memory.working) {
				const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					let colesttargets = creep.pos.findClosestByPath(targets);
					if (colesttargets) {
						creep.say("BU");
						creep.moveTo(colesttargets, { visualizePathStyle: { stroke: "#ffffff" } });
						creep.build(colesttargets);
					}
				} else {
					creep.say("up");
					UpgradeControllerByObj(creep, creep.room.controller);
				}
			} else {
				// creep.say("WFC");
				// WithdrawFromContainer(creep, "64e870f7d3acba1ba87f72ac", RESOURCE_ENERGY);
				const needtodis = creep.room.find(FIND_HOSTILE_STRUCTURES);
				if (creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE)) {
					const sourceId = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE)!.id;
					HarvestSource(creep, sourceId);
				} else if (creep.room.find(FIND_HOSTILE_STRUCTURES)) {
					creep.moveTo(needtodis[0]);
					creep.dismantle(needtodis[0]);
				} else {
					creep.memory.working = true;
				}
			}
		}
	}
};
