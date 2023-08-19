const Claim2W58S15 = {
	run: function (creep: any) {
		const targetRoom = "W49S11";
		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(10, 10, targetRoom), { visualizePathStyle: { stroke: "#ffffff" } });
		} else if (creep.room.name === targetRoom) {
			if (creep.room.controller && !creep.room.controller.my) {
				creep.reserveController(creep.room.controller);
				// creep.signController(creep.room.controller, "I'm new in here.")
				if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
					creep.moveTo(creep.room.controller);
				}
			} else {
				if (
					creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE ||
					creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE
				) {
					creep.moveTo(new RoomPosition(10, 10, targetRoom), { visualizePathStyle: { stroke: "#ffffff" } });
				}
			}
		}
	}
};
export default Claim2W58S15;
