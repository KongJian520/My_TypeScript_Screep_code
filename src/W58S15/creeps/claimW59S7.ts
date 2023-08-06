const roleClaim = {
	run: function (creep: Creep) {
		const targetRoom = "W58S15";
		if (creep.room.name !== targetRoom) {
			creep.moveTo(new RoomPosition(10, 10, targetRoom), { visualizePathStyle: { stroke: "#ffffff" } });
		} else {
			creep.moveTo(creep.room.controller!.pos, { visualizePathStyle: { stroke: "#ffffff" } });
			creep.claimController(creep.room.controller!);
		}
	}
};
export default roleClaim;
