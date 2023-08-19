const RemoteHavster2W58S16 = {
	run: function (creep: Creep) {
		const targetRoom = "W58S17";
		const Home = "W58S16";

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
				const sources = Game.getObjectById("5bbca9eb9099fc012e6305bf") as Source;
				creep.say(creep.harvest(sources) as unknown as string);
				if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources, {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 10
					});
				}
			}
		} else if (!creep.memory.working) {
			if (creep.room.name !== Home) {
				creep.moveTo(new RoomPosition(31, 37, Home), { reusePath: 10 });
			} else {
				const targets = Game.getObjectById<StructureContainer>("64d71a88ba4a40b1c74ab6df");
				if (targets) {
					if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets, {
							visualizePathStyle: { stroke: "#ffaa00" },
							reusePath: 10
						});
					}
				}
			}
		}
	}
};

export default RemoteHavster2W58S16;
