const SelfH = {
	run: function (creep: Creep) {
		const moveToFlag = Game.flags.SHMOV1;
		let targetRoom = moveToFlag.room!.name;
		const BackToFlag = Game.flags.SHMOV2;
		let Home = BackToFlag.room!.name;
		creep.heal(creep);
		if (!creep.memory.working && creep.hits > creep.hitsMax * 0.9) {
			creep.memory.working = true;
			creep.say("移动");
		}
		if (creep.memory.working && creep.hits < creep.hitsMax * 0.8) {
			creep.memory.working = false;
			creep.say("退场");
		}
		if (creep.memory.working) {
			if (creep.room.name !== targetRoom) {
				creep.moveTo(moveToFlag.pos, { visualizePathStyle: { stroke: "#ff0000" } });
			} else if (creep.room.name === targetRoom) {
				creep.moveTo(moveToFlag.pos, { visualizePathStyle: { stroke: "#ff0000" } });
			}
		} else {
			if (creep.room.name !== Home) {
				creep.moveTo(BackToFlag.pos, { visualizePathStyle: { stroke: "#ff0000" } });
			} else if (creep.room.name === Home) {
				creep.moveTo(BackToFlag.pos, { visualizePathStyle: { stroke: "#ff0000" } });
			}
		}
	}
};
export default SelfH;
