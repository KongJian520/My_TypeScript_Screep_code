const roleRemoteBuilderW58S14 = {
	run: function (creep: Creep) {
		const targetRoom = "W58S15";
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
					// targets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);

					if (targets.length !== 0) {
						if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
							creep.moveTo(targets[0], {
								visualizePathStyle: { stroke: "#f00fff" },
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
				}
			} else {
				const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
				if (source) {
					if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
						creep.moveTo(source, { visualizePathStyle: { stroke: "#ffff00" } });
					}
				}
			}
			// if (creep.room.name !== Home) {
			// 	creep.moveTo(new RoomPosition(1, 29, Home));
			// } else {
			// 	const sources = creep.room.find(FIND_STRUCTURES, {
			// 		filter: (structure: any) => {
			// 			return structure.structureType == STRUCTURE_STORAGE && structure.store.energy > 0;
			// 		}
			// 	});
			// 	// 如果找到了 container
			// 	if (sources.length > 0) {
			// 		// 使用 pos.findClosestByPath 方法找到距离最近的 container
			// 		const closestContainer = creep.pos.findClosestByPath(sources);
			// 		// 如果找到了最近的 container
			// 		if (closestContainer) {
			// 			// creep.say('UP 最近的找到了')
			// 			// 移动到最近的 container 并从中取出能量
			// 			if (creep.withdraw(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			// 				creep.moveTo(closestContainer);
			// 			}
			// 		}
			// 	}
			// 	if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			// 		creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#ffaa00" } });
			// 	}
			// }
		}
	}
};
export default roleRemoteBuilderW58S14;
