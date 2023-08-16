const GuardW59S15 = {
	run: function (creep: Creep) {
		const targetRoom = "W59S15";
		if (creep.room.name !== targetRoom) {
			// 如果当前不在目标房间，就移动过去
			creep.moveTo(new RoomPosition(20, 20, targetRoom), { visualizePathStyle: { stroke: "#ff0000" } });
			return;
		}
		if (creep.hits < creep.hitsMax) {
			creep.heal(creep);
		} else {
			const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
			const targetSrtuc = creep.room.find(FIND_HOSTILE_STRUCTURES);
			if (target) {
				if (creep.attack(target) === ERR_NOT_IN_RANGE) {
					creep.moveTo(target, { visualizePathStyle: { stroke: "#ff0000" } });
				}
			}
			if (targetSrtuc.length !== 0) {
				if (creep.attack(targetSrtuc[0]) === ERR_NOT_IN_RANGE) {
					creep.moveTo(targetSrtuc[0], { visualizePathStyle: { stroke: "#ff0000" } });
				}
			} else {
				creep.moveTo(40, 27, { visualizePathStyle: { stroke: "#ffffff" } });
			}
		}
	}
};
export default GuardW59S15;
