const roleremoteAttackerW57S13 = {
	run: function (creep: Creep) {
		const targetRoom = "W57S13";
		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(33, 48, targetRoom), { visualizePathStyle: { stroke: "#ffaa00" } });
		} else {
			const target = creep.room.find(FIND_HOSTILE_CREEPS);
			creep.say(creep.attack(target[0]) as unknown as string);
			if (target.length !== 0) {
				if (creep.attack(target[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target[0], { visualizePathStyle: { stroke: "#ff0000" } });
				}
			} else {
				creep.moveTo(25, 25, { visualizePathStyle: { stroke: "#ff0000" } });
			}
		}
	}
};

export default roleremoteAttackerW57S13;
