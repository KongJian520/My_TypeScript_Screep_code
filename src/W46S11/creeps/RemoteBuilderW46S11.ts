export const RemoteBuilderW46S11 = {
	run: function (creep: Creep) {
		const targetRoom = "W56S7";
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("RBU 🔄 ");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧 build");
		}
		if (creep.room.name !== targetRoom) {
			creep.say("Moving");
			creep.moveTo(new RoomPosition(20, 37, targetRoom), {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 10
			});
		} else if (creep.room.name === targetRoom) {
			if (creep.memory.working) {
				const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0], {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					}
				} else {
					if (creep.upgradeController(creep.room.controller!) == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller!, {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					}
				}
			} else {
				let target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
					filter: (s: any) =>
						(s.structureType === STRUCTURE_STORAGE ||
							s.structureType == STRUCTURE_CONTAINER ||
							s.structureType == STRUCTURE_TERMINAL) &&
						s.store.energy > 0
				})!;
				// 如果找到了目标
				if (target !== undefined) {
					if (creep.withdraw(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
						creep.moveTo(target, { visualizePathStyle: { stroke: "#ffffff" } });
					}
				} else {
					// creep.moveTo(21, 41);
					const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
					if (source) {
						if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
							creep.moveTo(source, { visualizePathStyle: { stroke: "#ffff00" } });
						}
					}
				}
			}
		}
	}
};
