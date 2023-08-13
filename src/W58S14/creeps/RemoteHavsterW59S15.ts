const RemoteHavsterW59S15 = {
	run: function (creep: Creep) {
		const targetRoom = "W59S15";
		const Home = "W58S14";
		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say("RH 挖矿");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say("RH 存");
		}
		if (creep.memory.working) {
			if (creep.room.name !== targetRoom) {
				creep.moveTo(new RoomPosition(20, 37, targetRoom), { visualizePathStyle: { stroke: "#ffaa00" } });
			} else if (creep.room.name === targetRoom) {
				const sources = creep.room.find(FIND_SOURCES_ACTIVE);
				creep.say(creep.harvest(sources[0]) as unknown as string);
				if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0], {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 10
					});
				}
			}
		} else if (!creep.memory.working) {
			if (creep.room.name !== Home) {
				creep.moveTo(new RoomPosition(31, 37, Home), { reusePath: 10 });
			} else {
				const targets = Game.getObjectById<StructureContainer>("64d8857d4098bde67d436766")!;
				if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets, {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 10
					});
				}
			}
		}
	}
};

export default RemoteHavsterW59S15;
