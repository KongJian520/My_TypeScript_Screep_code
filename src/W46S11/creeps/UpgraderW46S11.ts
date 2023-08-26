import { HarvestSource } from "../../GlobalUtil/utils/HarvestSource";
import { WithdrawFromContainer } from "../../GlobalUtil/utils/WithdrawFromContainer";

export const UpgraderW46S11 = {
	run: function (creep: Creep) {
		// if (this.boostIfNeeded(creep)) {
		// 	return;
		// }

		if (!this.working(creep)) {
			// this.acquireStoreEnergy(creep);
			// HarvestSource(creep, "5bbcaa8b9099fc012e63198c");
			WithdrawFromContainer(creep, "64e04c079548e7bfd521e3ea");
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

	acquireStoreEnergy: function (creep: Creep): void {
		const sources = creep.room.find(FIND_STRUCTURES, {
			filter: (structure: any) => {
				return (
					(structure.structureType === STRUCTURE_STORAGE || structure.structureType === STRUCTURE_TERMINAL) &&
					structure.store.energy > 200
				);
			}
		});

		if (sources.length > 0) {
			const closestSource = creep.pos.findClosestByPath(sources);
			if (closestSource) {
				if (creep.withdraw(closestSource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
					creep.moveTo(closestSource, {
						visualizePathStyle: { stroke: "#ffffff" },
						reusePath: 10
					});
				}
			}
		}
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
