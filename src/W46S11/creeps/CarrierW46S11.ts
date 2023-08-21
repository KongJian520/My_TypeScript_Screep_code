export const CarrierW46S11 = {
	run: function (creep: Creep) {
		const Home = "W46S11";
		if (creep.room.name !== Home) {
			creep.moveTo(new RoomPosition(20, 37, Home));
		} else {
			if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
				creep.memory.working = false;
				creep.say("🔄");
			}
			if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
				creep.memory.working = true;
				creep.say("working");
			}
			if (creep.memory.working) {
				// 填充 EXT 和 Spawn
				const closestLab = creep.pos.findClosestByPath(
					creep.room.find(FIND_STRUCTURES, {
						filter: (structure: any) =>
							structure.structureType === STRUCTURE_LAB && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
					})
				);
				const closestTarget = creep.pos.findClosestByPath(
					creep.room.find(FIND_STRUCTURES, {
						filter: (structure: any) =>
							(structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
							structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
					})
				);

				if (closestTarget) {
					if (creep.transfer(closestTarget, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
						creep.moveTo(closestTarget, { visualizePathStyle: { stroke: "#ffffff" } });
					}
				} else if (closestLab) {
					if (creep.transfer(closestLab, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
						creep.moveTo(closestLab, { visualizePathStyle: { stroke: "#ffffff" } });
					}
				}
			} else {
				const sources = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) =>
						(structure.structureType === STRUCTURE_STORAGE ||
							structure.structureType === STRUCTURE_LINK ||
							structure.structureType === STRUCTURE_CONTAINER ||
							structure.structureType === STRUCTURE_TERMINAL) &&
						structure.store.energy > 100
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
