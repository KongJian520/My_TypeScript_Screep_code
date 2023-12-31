export const Guard = {
	run(creep: Creep): void {
		const targetRoom = "W56S7"; // 将 targetRoom 定义在函数内部
		if (creep.room.name !== targetRoom) {
			// 如果当前不在目标房间，就移动过去
			creep.moveTo(new RoomPosition(20, 20, targetRoom), { visualizePathStyle: { stroke: "#ff0000" } });
		} else {
			if (creep.hits < creep.hitsMax) {
				creep.heal(creep);
			} else {
				const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
				if (target) {
					if (creep.attack(target) === ERR_NOT_IN_RANGE) {
						creep.moveTo(target, { visualizePathStyle: { stroke: "#ff0000" } });
					}
				} else {
					creep.moveTo(15, 17, { visualizePathStyle: { stroke: "#ffffff" } });
				}
			}
		}
	}
};
