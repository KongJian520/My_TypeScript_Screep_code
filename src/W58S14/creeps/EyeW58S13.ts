const roleEyeW58S13 = {
	run: function (creep: Creep) {
		const targetRoom = "W58S13";

		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(33, 48, targetRoom), { visualizePathStyle: { stroke: "#ffaa00" } });
		} else {
			const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
			if (target !== null) {
				if (creep.attack(target) === ERR_NOT_IN_RANGE) {
					creep.moveTo(target, { visualizePathStyle: { stroke: "#ff0000" } });
				}
			} else {
				creep.moveTo(25, 25, { visualizePathStyle: { stroke: "#ff0000" } });
			}
		}
	}
};
export default roleEyeW58S13;
