export const CollectorW46S11 = {
	run: function (creep: Creep) {
		// 如果creep没有能量，且房间内有掉落的资源或者墓碑
		if (
			creep.store.getUsedCapacity() === 0 &&
			(creep.room.find(FIND_DROPPED_RESOURCES).length > 0 ||
				creep.room.find(FIND_TOMBSTONES, { filter: t => t.store.energy > 0 }).length > 0 ||
				creep.room.find(FIND_RUINS, { filter: t => t.store.energy > 0 }).length > 0)
		) {
			// 设置creep的状态为获取能量
			creep.memory.working = false;
		}
		// 如果creep有能量，且房间内有storage或者termin
		else if (
			creep.store.getUsedCapacity() > 0 &&
			creep.room.find(FIND_STRUCTURES, {
				filter: (s: any) =>
					(s.structureType === STRUCTURE_CONTAINER ||
						s.structureType === STRUCTURE_STORAGE ||
						s.structureType == STRUCTURE_SPAWN ||
						s.structureType == STRUCTURE_EXTENSION ||
						s.structureType === STRUCTURE_TERMINAL) &&
					s.store.getFreeCapacity() !== 0
			}).length > 0
		) {
			// 设置creep的状态为送能量
			creep.memory.working = true;
		}
		// 如果creep的状态为获取能量
		if (!creep.memory.working) {
			let source: any =
				creep.pos.findClosestByPath(FIND_RUINS, {
					filter: t => t.store.getUsedCapacity(RESOURCE_ENERGY) > 0
				}) ||
				creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES) ||
				creep.pos.findClosestByPath(FIND_TOMBSTONES, {
					filter: t => t.store.getUsedCapacity(RESOURCE_ENERGY) > 0
				})!;

			// 如果找到了资源或者墓碑
			if (source !== undefined) {
				if (creep.pickup(source) === ERR_NOT_IN_RANGE || creep.withdraw(source, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
					// 如果不在范围内，就向资源或者墓碑移动
					creep.say("移动中");
					creep.moveTo(source, { visualizePathStyle: { stroke: "#ffaa00" } });
				}
			} else {
				creep.memory.working = true;
			}
		} else {
			let target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
				filter: (s: any) =>
					(s.structureType === STRUCTURE_STORAGE ||
						s.structureType == STRUCTURE_SPAWN ||
						s.structureType == STRUCTURE_EXTENSION ||
						s.structureType == STRUCTURE_CONTAINER ||
						s.structureType == STRUCTURE_TERMINAL) &&
					s.store.getFreeCapacity(RESOURCE_ENERGY) > 0
			})!;
			// 如果找到了目标
			if (target !== undefined) {
				let pickupedSource: any = _.keys(creep.store);
				if (creep.transfer(target, pickupedSource[0]) === ERR_NOT_IN_RANGE) {
					creep.moveTo(target, { visualizePathStyle: { stroke: "#ffffff" } });
				} else if (creep.transfer(target, pickupedSource[0]) === 0) {
					for (const resourceType in creep.store) {
						creep.transfer(target, resourceType as ResourceConstant);
					}
				}
			} else {
				creep.moveTo(21, 41);
			}
		}
	}
};
