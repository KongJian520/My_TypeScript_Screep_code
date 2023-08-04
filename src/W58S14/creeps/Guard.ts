const roleGuardW58S14 = {
	run: function (creep: Creep) {
		const targetRoom = "W59S14";
		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(48, 47, targetRoom), { visualizePathStyle: { stroke: "#ffaa00" } });
		} else {
			let target = creep.room.find(FIND_HOSTILE_CREEPS);
			if (target.length > 0) {
				if (creep.attack(target[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target[0], { visualizePathStyle: { stroke: "#ff0000" } });
				}
			} else {
				creep.moveTo(new RoomPosition(48, 47, targetRoom), { visualizePathStyle: { stroke: "#ffaa00" } });
			}
			if (creep.hits < creep.hitsMax * 0.4) {
				creep.heal(creep);
			}
		}
	}
};
export default roleGuardW58S14;
