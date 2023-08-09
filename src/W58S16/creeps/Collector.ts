import roleCarrier from "./carrier";

const roleCollector = {
	run: function (creep: any) {
		if (_.filter(Game.creeps, creep => creep.memory.role == "collector").length == 0) {
			roleCarrier.run(creep);
		}
		// 如果creep没有能量，且房间内有掉落的资源或者墓碑
		if (
			creep.store.getUsedCapacity() == 0 &&
			(creep.room.find(FIND_DROPPED_RESOURCES).length > 0 ||
				creep.room.find(FIND_TOMBSTONES, { filter: (t: any) => t.store.energy > 0 }).length > 0 ||
				creep.room.find(FIND_RUINS, { filter: (t: any) => t.store.energy > 0 }).length > 0)
		) {
			// 设置creep的状态为获取能量
			creep.memory.working = false;
		}
		// 如果creep有能量，且房间内有storage或者termin
		else if (
			creep.store.getUsedCapacity() > 0 &&
			creep.room.find(FIND_STRUCTURES, {
				filter: (s: any) =>
					s.structureType == STRUCTURE_CONTAINER ||
					s.structureType == STRUCTURE_STORAGE ||
					s.structureType == STRUCTURE_TERMINAL ||
					s.structureType == STRUCTURE_TOWER
			}).length > 0
		) {
			// 设置creep的状态为送能量
			creep.memory.working = true;
		}
		// 如果creep的状态为获取能量
		if (!creep.memory.working) {
			// 寻找最近的掉落的资源或者墓碑
			const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
			if (target) {
				if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target);
				}
			} else {
				let targrts =
					creep.room.find(FIND_TOMBSTONES, { filter: (t: any) => t.store.energy > 0 }).length > 0 ||
					creep.room.find(FIND_RUINS, { filter: (t: any) => t.store.energy > 0 }).length > 0;
				if (creep.withdraw(targrts) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targrts);
				}
			}
		} else {
			// 寻找最近的storage或者terminal
			const target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
				filter: (s: any) =>
					(s.structureType == STRUCTURE_TOWER ||
						s.structureType == STRUCTURE_SPAWN ||
						s.structureType == STRUCTURE_CONTAINER ||
						s.structureType == STRUCTURE_TERMINAL) &&
					s.store.getFreeCapacity(RESOURCE_ENERGY) > 0
			});
			// 如果找到了目标
			if (target != undefined) {
				// creep.say('运输能量')
				// 尝试向目标转移能量
				const pickupedSource = _.keys(creep.store);
				if (creep.transfer(target, pickupedSource[0]) == ERR_NOT_IN_RANGE) {
					// 如果不在范围内，就向目标移动
					creep.moveTo(target, { visualizePathStyle: { stroke: "#ffffff" } });
				} else if (creep.transfer(target, pickupedSource[0]) == 0) {
					for (const resourceType in creep.carry) {
						creep.transfer(target, resourceType);
					}
				}
			} else {
				creep.moveTo(21, 41);
			}
		}
	}
};
export default roleCollector;
