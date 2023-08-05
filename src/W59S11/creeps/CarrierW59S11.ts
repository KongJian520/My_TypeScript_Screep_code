const CarrierW59S11 = {
	run: function (creep: Creep) {
		const Home = "W59S11";
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
				const towers = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) =>
						structure.structureType === STRUCTURE_TOWER && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
				});
				towers.sort(
					(a: any, b: any) =>
						a.store.energy / a.store.getCapacity(RESOURCE_ENERGY) -
						b.store.energy / b.store.getCapacity(RESOURCE_ENERGY)
				);
				const closestTower = creep.pos.findClosestByPath(towers);
				if (closestTower) {
					if (creep.transfer(closestTower, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
						creep.moveTo(closestTower, { visualizePathStyle: { stroke: "#ffffff" } });
					}
				}
			} else {
				const sources = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) =>
						(structure.structureType === STRUCTURE_CONTAINER ||
							structure.structureType === STRUCTURE_STORAGE ||
							structure.structureType === STRUCTURE_TERMINAL) &&
						structure.store.energy > 0
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

export default CarrierW59S11;
