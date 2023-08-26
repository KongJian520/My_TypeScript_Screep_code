export const ChargeStructure = (creep: Creep) => {
	// 填充 EXT 和 Spawn
	const closestTarget = creep.pos.findClosestByPath(
		creep.room.find(FIND_STRUCTURES, {
			filter: (structure: any) =>
				(structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
				structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
		})
	);
	const closestTower = creep.pos.findClosestByPath(
		creep.room.find(FIND_STRUCTURES, {
			filter: (structure: any) =>
				structure.structureType === STRUCTURE_LAB && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
		})
	);
	const closestLab = creep.pos.findClosestByPath(
		creep.room.find(FIND_STRUCTURES, {
			filter: (structure: any) =>
				structure.structureType === STRUCTURE_LAB && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
		})
	);
	if (closestTarget) {
		creep.say("Spawn");
		if (creep.transfer(closestTarget, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
			creep.moveTo(closestTarget, {
				visualizePathStyle: { stroke: "#ffffff" },
				reusePath: 10
			});
		}
	} else if (closestTower) {
		creep.say("tower");
		if (creep.transfer(closestTower, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
			creep.moveTo(closestTower, {
				visualizePathStyle: { stroke: "#ffffff" },
				reusePath: 10
			});
		}
	} else if (closestLab) {
		creep.say("lab");
		if (creep.transfer(closestLab, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
			creep.moveTo(closestLab, {
				visualizePathStyle: { stroke: "#ffffff" },
				reusePath: 10
			});
		}
	}
};
export const noMoveChargeStructure = (creep: Creep) => {
	// 填充 EXT 和 Spawn
	const closestTarget = creep.pos.findClosestByPath(
		creep.room.find(FIND_STRUCTURES, {
			filter: (structure: any) =>
				(structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
				structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
		})
	);
	const closestTower = creep.pos.findClosestByPath(
		creep.room.find(FIND_STRUCTURES, {
			filter: (structure: any) =>
				structure.structureType === STRUCTURE_LAB && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
		})
	);
	const closestLab = creep.pos.findClosestByPath(
		creep.room.find(FIND_STRUCTURES, {
			filter: (structure: any) =>
				structure.structureType === STRUCTURE_LAB && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
		})
	);
	if (closestTarget) {
		creep.say("Spawn");
		if (creep.transfer(closestTarget, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
		}
	}
	if (closestTower) {
		creep.say("tower");
		if (creep.transfer(closestTower, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
		}
	}
	if (closestLab) {
		creep.say("lab");
		if (creep.transfer(closestLab, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
		}
	}
};
