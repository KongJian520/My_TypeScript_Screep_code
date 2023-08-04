const SelfH = {
	run: function (creep: Creep) {
		const targetRoom = "W56S13";
		const Home = "W57S13";
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
				creep.moveTo(new RoomPosition(1, 47, targetRoom), { visualizePathStyle: { stroke: "#ff0000" } });
			} else if (creep.room.name === targetRoom) {
				creep.heal(creep);
			}
		} else {
			if (creep.room.name !== Home) {
				creep.moveTo(new RoomPosition(48, 47, Home), { visualizePathStyle: { stroke: "#ff0000" } });
			} else if (creep.room.name === Home) {
				creep.moveTo(new RoomPosition(47, 47, Home), { visualizePathStyle: { stroke: "#ff0000" } });
			}
		}
	}
};
export default SelfH;
