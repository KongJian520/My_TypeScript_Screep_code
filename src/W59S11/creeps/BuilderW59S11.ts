const BuilderW59S11 = {
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
				let colestTargets = creep.pos.findClosestByPath(targets)!;
				if (creep.build(colestTargets) == ERR_NOT_IN_RANGE) {
					creep.moveTo(colestTargets, { visualizePathStyle: { stroke: "#ffffff" } });
				}
			} else {
				const structuresToRepair = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: Structure) =>
						structure.hits < structure.hitsMax &&
						structure.structureType !== STRUCTURE_WALL &&
						structure.structureType !== STRUCTURE_RAMPART
				});
				if (structuresToRepair.length) {
					if (creep.repair(structuresToRepair[0]) === ERR_NOT_IN_RANGE) {
						creep.moveTo(structuresToRepair[0], { visualizePathStyle: { stroke: "#00ff00" } });
						let nearNeedToRepair = creep.pos.findInRange(FIND_MY_STRUCTURES, 2, {
							filter: (structure: Structure) => structure.hits < structure.hitsMax
						});
						creep.repair(nearNeedToRepair[0]);
					}
				}
			}
		} else {
			const sources = creep.room.find(FIND_STRUCTURES, {
				filter: (structure: any) => {
					return (
						(structure.structureType == STRUCTURE_CONTAINER && structure.id == "64cd2b491b1090248eaed7de") ||
						(structure.structureType == STRUCTURE_STORAGE && structure.store.energy > 0)
					);
				}
			});
			// 如果找到了 container
			if (sources.length > 0) {
				// 使用 pos.findClosestByPath 方法找到距离最近的 container
				const closestContainer = creep.pos.findClosestByPath(sources);
				// 如果找到了最近的 container
				if (closestContainer) {
					// creep.say('UP 最近的找到了')
					// 移动到最近的 container 并从中取出能量
					if (creep.withdraw(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(closestContainer);
					}
				}
			}
		}
	}
};
export default BuilderW59S11;
