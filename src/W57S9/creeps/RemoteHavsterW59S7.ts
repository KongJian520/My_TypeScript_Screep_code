// noinspection DuplicatedCode

const RemoteHavster = {
	run: function (creep: Creep) {
		const targetRoom = "W59S7";
		const Home = creep.memory.room;

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
				creep.moveTo(new RoomPosition(20, 37, targetRoom), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 50
				});
			} else if (creep.room.name === targetRoom) {
				const sources = creep.room.find(FIND_SOURCES);
				creep.say(creep.harvest(sources[0]) as unknown as string);
				if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0], {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 50
					});
				}
				if (creep.harvest(sources[0]) == -6) {
					if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(sources[1], {
							visualizePathStyle: { stroke: "#ffaa00" },
							reusePath: 50
						});
					}
				}
			}
		} else if (!creep.memory.working) {
			if (creep.room.name !== Home) {
				creep.moveTo(new RoomPosition(31, 37, Home), { reusePath: 10 });
			} else {
				const targets = creep.room.find(FIND_STRUCTURES, {
					filter: structure => {
						return (
							structure.structureType == STRUCTURE_CONTAINER ||
							(structure.structureType == STRUCTURE_STORAGE && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0)
						);
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
								reusePath: 50
							});
						}
					}
				}
			}
		}
	}
};

export default RemoteHavster;
