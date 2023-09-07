export const RemoteHarvester = {
	run: function (creep: Creep, targetRoom: Room, SourceID: string) {
		if (creep.room.name !== targetRoom.name) {
			creep.moveTo(new RoomPosition(25, 25, targetRoom.name), { visualizePathStyle: { stroke: "#ffaa00" } });
		} else {
			const source = Game.getObjectById<Source>(SourceID);
			if (source) {
				if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source, { visualizePathStyle: { stroke: "#ffaa00" } });
				}
			}
		}
	}
};
