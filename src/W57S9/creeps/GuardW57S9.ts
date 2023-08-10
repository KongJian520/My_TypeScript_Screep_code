const GuardW57S9 = {
	run(creep: Creep): void {
		const targetRoom = "W57S9"; // 将 targetRoom 定义在函数内部

		if (creep.room.name !== targetRoom) {
			creep.say("移动");
			creep.moveTo(new RoomPosition(20, 20, targetRoom), { visualizePathStyle: { stroke: "#ff0000" } });
		}
		if (creep.hits < creep.hitsMax * 0.8) {
			creep.say("回血");
			creep.heal(creep);
		} else {
			const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
			if (target) {
				if (creep.attack(target) === ERR_NOT_IN_RANGE) {
					creep.say("敌人");

					creep.moveTo(target, { visualizePathStyle: { stroke: "#ff0000" } });
				}
			} else {
				creep.say("控制器");
				creep.moveTo(creep.room.controller!, { visualizePathStyle: { stroke: "#ffffff" } });
			}
		}
	}
};
export default GuardW57S9;
