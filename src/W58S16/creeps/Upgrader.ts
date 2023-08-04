import dismoveableminer from "./dismoveableminer";

const roleUpgrader = {
	run: function (creep: any) {
		if (_.filter(Game.creeps, creep => creep.memory.role == "dismoveableminer").length == 0) {
			dismoveableminer.run(creep);
		} else {
			if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
				creep.memory.working = false;
				creep.say("🔄");
			}
			if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
				creep.memory.working = true;
				creep.say("升级中");
			}
			if (creep.memory.working) {
				creep.say("Uping");
				if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
					creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: "#ffffff" }, reusePath: 10 });
				}
			} else {
				// var sources = creep.room.find(FIND_SOURCES);
				// if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
				//     creep.moveTo(sources[1], { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 4 });
				// }
				// var sources =
				// creep.room.find(FIND_STRUCTURES, {
				// 	filter: (s: any) => (
				// 		s.structureType == STRUCTURE_CONTAINER &&
				//         s.store.energy <= s.storeCapacity &&
				//         s.store.energy > 0)
				// });
				const sources = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) => {
						return (
							// structure.structureType == STRUCTURE_CONTAINER ||
							structure.structureType == STRUCTURE_STORAGE && structure.store.energy > 200
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
							creep.moveTo(closestContainer, { visualizePathStyle: { stroke: "#ffffff" }, reusePath: 10 });
						}
					}
				}
				if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources, { visualizePathStyle: { stroke: "#ffaa00" } });
				}
			}
			// creep.memory.role = 'upgrader'
		}
	}
};

export default roleUpgrader;
