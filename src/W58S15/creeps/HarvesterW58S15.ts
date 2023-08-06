const roleHarvesterW59S11 = {
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
			if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[1], {
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
			const targets = creep.room.find(FIND_MY_STRUCTURES, {
				//寻找设施存入 target
				filter: (structure: any) => {
					return (
						(structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_EXTENSION) &&
						structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
					);
				}
			});
			targets.sort((a: any, b: any) => a.store.energy - b.store.energy);
			if (targets.length > 0) {
				if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {
						visualizePathStyle: { stroke: "#ffffff" },
						reusePath: 10
					}); //工作运输
				}
			}
		}
	}
};

export default roleHarvesterW59S11;
