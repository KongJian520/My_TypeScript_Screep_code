const RemoteHavster3W58S16 = {
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
				const sources = Game.getObjectById("5bbca9eb9099fc012e6305b9") as Source;
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
				// const targets = Game.getObjectById("64c0730c64271e64bf03f388") as StructureLink;
				// if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				// 	creep.moveTo(targets);
				// }
				const targets = creep.room.find(FIND_STRUCTURES, {
					filter: structure => {
						return structure.structureType == STRUCTURE_STORAGE && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
					}
				});
				if (targets.length > 0) {
					const closestContainer = creep.pos.findClosestByPath(targets);
					if (closestContainer) {
						// creep.say('RH 最近的找到了')
						// 移动到最近的 container 并从中放入能量
						if (creep.transfer(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(closestContainer, {
								visualizePathStyle: { stroke: "#ffaa00" },
								reusePath: 10
							});
						}
					}
				}
			}
		}
	}
};

export default RemoteHavster3W58S16;
