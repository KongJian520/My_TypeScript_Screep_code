const roleRemoteBuilder = {
	run: function (creep: Creep) {
		const targetRoom = "W59S7";
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
				const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0], {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					}
				} else {
					const targets = creep.room.find(FIND_STRUCTURES, {
						filter: (structure: any) => {
							return structure.structureType == STRUCTURE_ROAD && structure.hits < structure.hitsMax;
						}
					});
					targets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);
					if (targets.length > 0) {
						if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
							creep.moveTo(targets[0], {
								visualizePathStyle: { stroke: "#f00fff" },
								reusePath: 10
							});
						}
					}
				}
			} else {
				let sources = creep.room.find(FIND_SOURCES);
				if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#ffaa00" } });
				}
			}
		}
	}
};
export default roleRemoteBuilder;
