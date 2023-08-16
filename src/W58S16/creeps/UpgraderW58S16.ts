const UpgraderW58S16 = {
	run: function (creep: Creep) {
		if (this.boostIfNeeded(creep)) {
			return;
		}

		if (!this.working(creep)) {
			this.acquireEnergy(creep);
		} else {
			this.upgradeController(creep);
		}
	},

	boostIfNeeded: function (creep: Creep): boolean {
		const LAB = Game.getObjectById<StructureLab>("64c3f9afb10a865fabd2ebf0")!;
		if (LAB && LAB.store.energy >= 20 && LAB.store[RESOURCE_GHODIUM_HYDRIDE] >= 30) {
			if (creep.ticksToLive! > 300) {
				if (!creep.body.some(part => part.type === WORK && part.boost)) {
					creep.say("Boosting");
					const boostResult = LAB.boostCreep(creep);
					if (boostResult === OK) {
						creep.say("Boosted");
					} else if (boostResult === ERR_NOT_IN_RANGE) {
						creep.moveTo(LAB);
					}
					return true;
				}
			}
		}
		return false;
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

	acquireEnergy: function (creep: Creep): void {
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

export default UpgraderW58S16;
