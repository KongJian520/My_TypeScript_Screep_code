const roleClaimW58S13 = {
	run: function (creep: Creep) {
		const targetRoom = 'W58S13';
		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(10, 10, targetRoom), {visualizePathStyle: {stroke: '#ffffff'}})
		} else {
			creep.moveTo(creep.room.controller!.pos);
			if (creep.room.controller && !creep.room.controller.my) {
				creep.reserveController(creep.room.controller)
				if (creep.room.controller.reservation)
					if (creep.room.controller.reservation.username !== creep.owner.username) {
						if (creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
							creep.moveTo(new RoomPosition(37, 23, targetRoom), {visualizePathStyle: {stroke: '#ffffff'}})
						}
					} else if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller);
					}
			}
		}
	}
}
export default roleClaimW58S13
