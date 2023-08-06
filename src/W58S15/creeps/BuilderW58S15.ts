const BuilderW58S15 = {
	run: function (creep: Creep) {
		const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		targets.sort((a: ConstructionSite, b: ConstructionSite) => a.progressTotal - b.progressTotal);
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("BU 🔄");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧 build");
		}
		if (creep.memory.working) {
			if (targets.length > 0) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {
						visualizePathStyle: { stroke: "#ffffff" },
						reusePath: 10
					});
				}
			} else {
				const structuresToRepair = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: Structure) =>
						structure.hits < structure.hitsMax && structure.structureType !== STRUCTURE_RAMPART
				});
				structuresToRepair.sort((a: any, b: any) => a.hits - b.hits);
				if (structuresToRepair.length) {
					if (creep.repair(structuresToRepair[0]) === ERR_NOT_IN_RANGE) {
						creep.moveTo(structuresToRepair[0], {
							visualizePathStyle: { stroke: "#1bc758" },
							reusePath: 10
						});
						let nearNeedToRepair = creep.pos.findInRange(FIND_MY_STRUCTURES, 1, {
							filter: (structure: Structure) => structure.hits < structure.hitsMax
						});
						creep.repair(nearNeedToRepair[0]);
					}
				}
			}
		} else {
			// let sources = creep.room.find(FIND_SOURCES);
			// if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
			// 	creep.moveTo(sources[1], { visualizePathStyle: { stroke: "#ffaa00" } });
			// }
			useContainer();
		}

		function useContainer() {
			const sources = Game.getObjectById("64cf2666bee72abe30889401") as StructureContainer;

			if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources, {
					visualizePathStyle: { stroke: "#ffff00" },
					reusePath: 10
				});
			}
		}
	}
};
export default BuilderW58S15;
