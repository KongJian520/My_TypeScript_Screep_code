const BuilderW57S9 = {
	run: function (creep: Creep) {
		const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
		// targets.sort((a: ConstructionSite, b: ConstructionSite) => a.progressTotal - b.progressTotal);
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("BU 🔄");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧 build");
		}
		if (creep.memory.working) {
			if (targets.length !== 0) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {
						visualizePathStyle: { stroke: "#ffffff" }
					});
				}
			} else {
				if (creep.upgradeController(creep.room.controller!) == ERR_NOT_IN_RANGE) {
					creep.moveTo(creep.room.controller!, {
						visualizePathStyle: { stroke: "#ffffff" }
					});
					// }
				}
			}
		} else {
			const sources = creep.room.find(FIND_SOURCES);
			creep.say(creep.harvest(sources[1]) as unknown as string);
			if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[1], {
					visualizePathStyle: { stroke: "#ffaa00" }
				});
			}
			// const sources = Game.getObjectById("64d25b5eabe1ba48401e7e6b") as StructureStorage;
			// if (sources.store.energy > 0) {
			// 	if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			// 		creep.moveTo(sources, {
			// 			visualizePathStyle: { stroke: "#ffff00" },
			// 			reusePath: 10
			// 		});
			// 	}
			// } else {
			// 	creep.moveTo(18, 34);
			// }
		}
	}
};
export default BuilderW57S9;
