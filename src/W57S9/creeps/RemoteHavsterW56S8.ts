const RemoteHavsterW56S8 = {
	run: function (creep: Creep) {
		const targetRoom = "W56S8";
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
				const sources = Game.getObjectById<Source>("5bbcaa009099fc012e630926")!;
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
			const targets = Game.getObjectById<StructureContainer>("64dcc29f50690321f1c02480")!;
			if (targets.hits < targets.hitsMax * 0.8) {
				creep.repair(targets);
			} else {
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

export default RemoteHavsterW56S8;
