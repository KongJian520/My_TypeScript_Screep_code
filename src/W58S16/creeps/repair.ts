const roleRepair = {
	run: function (creep: any) {
		if (creep.memory.working && creep.carry.energy == 0) {
			creep.memory.working = false;
			creep.say("🔄 harvest");
		} else if (!creep.memory.working && creep.memory.target != "" && creep.carry.energy == creep.carryCapacity) {
			creep.memory.working = true;
			delete creep.memory.source;
			creep.say("⬆repair");
		} else if (!creep.memory.working && creep.memory.target == "" && creep.carry.energy == creep.carryCapacity) {
			creep.memory.working = true;
			delete creep.memory.source;
			creep.say("♻️transfer");
		}

		if (creep.memory.working) {
			const targets = creep.room.find(FIND_STRUCTURES, {
				filter: (structure: any) => {
					return (
						(structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_WALL) &&
						structure.hits < structure.hitsMax * 0.8
					);
				}
			});
			targets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);
			if (targets.length > 0) {
				if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {
						visualizePathStyle: { stroke: "#f00fff" },
						reusePath: 10
					});
					let nearNeedToRepair = creep.pos.findInRange(FIND_MY_STRUCTURES, 1, {
						filter: (structure: Structure) => structure.hits < structure.hitsMax
					});
					creep.repair(nearNeedToRepair[0]);
				}
			} else {
				// 如果周围没有需要修复的建筑，继续之前的逻辑
				let containers = creep.room.find(FIND_STRUCTURES, {
					filter: (s: any) => s.structureType == STRUCTURE_STORAGE && s.store.energy <= s.storeCapacity
				});
				if (containers.length > 0) {
					if (creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(containers[0], { visualizePathStyle: { stroke: "#ffaa00" } });
					}
				} else {
					// 如果容器或存储中没有能量，可以从能量源采集能量
					let sources = creep.room.find(FIND_SOURCES);
					if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(sources[0], {
							visualizePathStyle: { stroke: "#ffaa00" },
							reusePath: 10
						});
					}
				}
			}
		} else {
			// 例如采集能量的逻辑
			// 如果需要从容器或存储中获取能量：
			let containers = creep.room.find(FIND_STRUCTURES, {
				filter: (s: any) => s.structureType == STRUCTURE_STORAGE && s.store.energy > 0
			});
			if (containers.length > 0) {
				if (creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(containers[0], { visualizePathStyle: { stroke: "#ffaa00" } });
				}
			} else {
				// 如果容器或存储中没有能量，可以从能量源采集能量
				let sources = creep.room.find(FIND_SOURCES);
				if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0], {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 10
					});
				}
			}
		}
	}
};

export default roleRepair;
