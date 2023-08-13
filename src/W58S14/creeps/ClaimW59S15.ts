const ClaimW59S15 = {
	run: function (creep: Creep) {
		const targetRoom = "W59S15";
		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(25, 25, targetRoom), { visualizePathStyle: { stroke: "#ffffff" } });
		} else {
			creep.moveTo(creep.room.controller!.pos);
			if (creep.room.controller && !creep.room.controller.my) {
				creep.reserveController(creep.room.controller);
				if (creep.room.controller.reservation)
					if (creep.room.controller.reservation.username !== creep.owner.username) {
						if (creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
							creep.moveTo(new RoomPosition(25, 25, targetRoom), { visualizePathStyle: { stroke: "#ffffff" } });
						}
					} else if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller);
					}
			}
		}
	}
};
export default ClaimW59S15;
