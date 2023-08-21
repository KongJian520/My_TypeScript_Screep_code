export const ScavengerW46S11 = {
	run: function (creep: Creep) {
		const homeRoom = "W46S11"; // Your home room
		const storage = creep.room.storage!;

		if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
			creep.memory.working = true;
			creep.say("回");
		}

		if (creep.memory.working && creep.store.getUsedCapacity() === 0) {
			creep.memory.working = false;
			creep.say("去拾取");
		}

		if (creep.memory.working) {
			if (creep.room.name !== homeRoom) {
				creep.moveTo(new RoomPosition(10, 30, homeRoom), { visualizePathStyle: { stroke: "#ffaa00" }, reusePath: 6 });
			} else {
				if (storage) {
					for (const resourceType in creep.store) {
						if (creep.transfer(storage, resourceType as ResourceConstant) === ERR_NOT_IN_RANGE) {
							creep.moveTo(storage, { visualizePathStyle: { stroke: "#ffffff" }, reusePath: 6 });
						}
					}
				}
			}
		} else {
			if (creep.room.name !== homeRoom) {
				creep.moveTo(new RoomPosition(10, 30, homeRoom), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 6
				});
			} else {
				const ruins = creep.room.find(FIND_RUINS, {
					filter: ruin => ruin.store.getUsedCapacity() > 0
				});
				const ClosestRuins = creep.pos.findClosestByRange(ruins);
				if (ClosestRuins) {
					for (const resourceType in ClosestRuins.store) {
						if (creep.withdraw(ClosestRuins, resourceType as ResourceConstant) === ERR_NOT_IN_RANGE) {
							creep.moveTo(ClosestRuins, { visualizePathStyle: { stroke: "#ffaa00" }, reusePath: 6 });
						}
					}
				}
			}
		}
	}
};
