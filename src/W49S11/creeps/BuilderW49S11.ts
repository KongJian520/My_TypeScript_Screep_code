import { WithdrawEnergyFromContainer } from "../../GlobalUtil/utils/WithdrawEnergyFromContainer";
import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";

export const BuilderW49S11 = {
	upgradeController: function (creep: Creep): void {
		const controller = creep.room.controller;
		if (controller && creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
			creep.moveTo(controller, {
				visualizePathStyle: { stroke: "#ffffff" },
				reusePath: 10
			});
		}
	},
	run: function (creep: Creep) {
		const targetRoom = "W49S11";
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
			if (!creep.memory.working) {
				// WithdrawEnergyFromContainer(creep, "64e18494ac377c123bae7203");
				HarvestSource(creep, "5bbcaa8b9099fc012e631991");
			} else {
				const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					let colesttargets = creep.pos.findClosestByPath(targets);
					if (colesttargets) {
						if (creep.build(colesttargets) == ERR_NOT_IN_RANGE) {
							creep.moveTo(colesttargets, {
								visualizePathStyle: { stroke: "#ffffff" },
								reusePath: 10
							});
						}
					}
				} else {
					this.upgradeController(creep);
				}
			}
		}
	}
};
