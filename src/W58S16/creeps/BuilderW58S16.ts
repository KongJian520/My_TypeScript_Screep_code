const BuilderW58S16 = {
	run: function (creep: Creep) {
		const targetRoom = "W58S16";
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
				const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0], {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					}
				} else {
					if (creep.upgradeController(creep.room.controller!) == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller!, {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					}
				}
			} else {
				const sources = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) =>
						(structure.structureType === STRUCTURE_STORAGE ||
							structure.structureType === STRUCTURE_LINK ||
							structure.structureType === STRUCTURE_TERMINAL) &&
						structure.store.energy !== 0
				});
				if (sources.length > 0) {
					const closestContainer = creep.pos.findClosestByPath(sources);
					if (closestContainer) {
						if (creep.withdraw(closestContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
							creep.moveTo(closestContainer, { visualizePathStyle: { stroke: "#ffaa00" } });
						}
					}
				} else {
					creep.memory.working = true;
				}
			}
		}
	}
};
export default BuilderW58S16;
