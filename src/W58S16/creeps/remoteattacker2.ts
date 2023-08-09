const roleremoteAttackerW57S13 = {
	run: function (creep: Creep) {
		const targetRoom = "W59S6";

		if (creep.room.name !== targetRoom) {
			// 如果当前不在目标房间，就移动过去
			creep.moveTo(new RoomPosition(20, 20, targetRoom), {
				visualizePathStyle: { stroke: "#ff0000" },
				reusePath: 10
			});
			return;
		}
		if (creep.hits < creep.hitsMax) {
			creep.heal(creep);
		} else {
			// const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
			const target: any[] = creep.room.find(FIND_HOSTILE_SPAWNS);
			let ctt = creep.pos.findClosestByRange(target);
			if (ctt) {
				if (creep.attack(ctt) === ERR_NOT_IN_RANGE) {
					creep.moveTo(ctt, {
						visualizePathStyle: { stroke: "#ff0000" },
						reusePath: 100
					});
				} else {
					creep.moveTo(ctt, {
						visualizePathStyle: { stroke: "#ff0000" },
						reusePath: 100
					});
				}
			} else {
				creep.moveTo(creep.room.controller!, {
					visualizePathStyle: { stroke: "#ffffff" },
					reusePath: 100
				});
			}
		}
	}
};

export default roleremoteAttackerW57S13;
