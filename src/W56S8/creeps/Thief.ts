export const Thief = {
	run: function (creep: Creep) {
		const targetFlag = Game.flags.ThiefTarget;
		const targetroom = "W54S8";

		if (!creep.memory.working && creep.store.getUsedCapacity() == 0) {
			creep.memory.working = true;
			creep.say("T 🔍");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say("T 🚚S");
		}
		if (creep.memory.working) {
			if (creep.ticksToLive !== undefined) {
				if (creep.ticksToLive < 200) creep.suicide();
			}
			if (creep.room.name !== targetroom) {
				creep.moveTo(new RoomPosition(20, 20, targetroom));
			} else {
				const dropedres = creep.pos.findClosestByRange(creep.room.find(FIND_DROPPED_RESOURCES));
				let targetroomstorage = Game.rooms[targetroom].storage!;
				if (targetroomstorage) {
					creep.moveTo(targetroomstorage);
					for (const resourceType in targetroomstorage.store) {
						creep.withdraw(targetroomstorage, resourceType as ResourceConstant);
					}
				} else if (dropedres) {
					creep.moveTo(dropedres);
					creep.pickup(dropedres);
				}
			}
		} else {
			if (creep.room.name !== creep.memory.room) {
				creep.moveTo(new RoomPosition(20, 20, creep.memory.room));
			} else {
				let homeStorage = Game.rooms[creep.memory.room].storage!;
				creep.moveTo(homeStorage);
				for (const resourceType in creep.store) {
					creep.transfer(homeStorage, resourceType as ResourceConstant);
				}
			}
		}
	}
};
