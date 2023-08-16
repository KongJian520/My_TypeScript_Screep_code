const RemoteHavsterW58S16 = {
	run: function (creep: Creep) {
		const targetRoom = "W58S15";
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
				const sources = Game.getObjectById<Source>("5bbca9eb9099fc012e6305b8")!;
				if (sources.energy > 0) {
					if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
						creep.moveTo(sources, {
							visualizePathStyle: { stroke: "#ffaa00" },
							reusePath: 10
						});
					}
				} else if (creep.store.energy !== 0) {
					creep.memory.working = false;
				} else {
					creep.moveTo(sources);
				}
			}
		} else if (!creep.memory.working) {
			if (creep.room.name !== Home) {
				creep.moveTo(new RoomPosition(31, 37, Home), { reusePath: 10 });
			} else {
				const targets = Game.getObjectById<StructureContainer>("64dcea84f805462420214079");
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

export default RemoteHavsterW58S16;
