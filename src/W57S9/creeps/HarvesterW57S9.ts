const HarvesterW57S9 = {
	run(creep: Creep) {
		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say("🔄");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say("存放");
		}
		if (creep.memory.working) {
			const sources = creep.room.find(FIND_SOURCES_ACTIVE);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0], {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 10
				});
			}
		} else {
			storeEnergyInSpawn();
			// storeEnergyInContianer()
		}

		function storeEnergyInContianer() {
			const targets = Game.getObjectById("64cd2934e3f07ff8ff3122ab") as StructureContainer;
			if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(targets, {
					visualizePathStyle: { stroke: "#ffff00" },
					reusePath: 10
				});
			}
		}

		function storeEnergyInSpawn() {
			const targets = creep.room.find(FIND_STRUCTURES, {
				filter: (structure: any) =>
					(structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
					structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
			});
			targets.sort(
				(a: any, b: any) =>
					a.store.energy / a.store.getCapacity(RESOURCE_ENERGY) - b.store.energy / b.store.getCapacity(RESOURCE_ENERGY)
			);
			const closestTarget = creep.pos.findClosestByPath(targets);
			if (closestTarget) {
				if (creep.transfer(closestTarget, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
					creep.moveTo(closestTarget, { visualizePathStyle: { stroke: "#ffffff" } });
				}
			}
		}
	}
};

export default HarvesterW57S9;