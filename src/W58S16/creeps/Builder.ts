const roleBuilder = {
	run: function (creep: any) {
		const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		targets.sort((a: ConstructionSite, b: ConstructionSite) => a.progressTotal - b.progressTotal);
		if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.building = false;
			creep.say("BU 🔄");
		}
		if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
			creep.memory.building = true;
			creep.say("🚧 build");
		}
		if (creep.memory.building) {
			if (targets.length > 0) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {
						visualizePathStyle: { stroke: "#ffffff" },
						reusePath: 10
					});
				}
			} else {
				const targets = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) => {
						return (
							(structure.structureType == STRUCTURE_ROAD ||
								structure.structureType == STRUCTURE_WALL ||
								structure.structureType === STRUCTURE_CONTAINER) &&
							structure.hits < structure.hitsMax
						);
					}
				});
				targets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);
				if (targets.length) {
					if (creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0], {
							visualizePathStyle: { stroke: "#1bc758" },
							reusePath: 10
						});
						let nearNeedToRepair = creep.pos.findInRange(FIND_MY_STRUCTURES, 2, {
							filter: (structure: Structure) => structure.hits !== structure.hitsMax
						});
						creep.repair(nearNeedToRepair[0]);
					}
				}
			}
		} else {
			const sources = creep.room.find(FIND_STRUCTURES, {
				filter: (structure: any) => {
					return (
						// structure.structureType == STRUCTURE_CONTAINER ||
						structure.structureType == STRUCTURE_STORAGE && structure.store.energy > 0
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
			if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#ffaa00" } });
			}
		}
	}
};
export default roleBuilder;
