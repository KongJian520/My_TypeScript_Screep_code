const roleRemoteUpgrader = {
	run: function (creep: Creep) {
		const targetRoom = "W58S15";
		const targetcontroller = Game.rooms[targetRoom].controller;
		const Home = "W58S16";
		const Storage = Game.rooms[Home].storage;
		if (targetcontroller == undefined) {
			creep.moveTo(new RoomPosition(20, 37, targetRoom), { visualizePathStyle: { stroke: "#ffaa00" } });
		} else if (targetcontroller !== undefined) {
			if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
				creep.memory.working = false;
				creep.say("RUP 🔄 ");
			}
			if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
				creep.memory.working = true;
				creep.say("RUP ⚡");
			}
			if (creep.memory.working) {
				if (creep.room.name !== targetRoom) {
					creep.say("Moving");
					creep.moveTo(new RoomPosition(20, 37, targetRoom), {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 10
					});
				} else if (creep.room.name === targetRoom) {
					if (creep.memory.working) {
						if (creep.upgradeController(targetcontroller) == ERR_NOT_IN_RANGE) {
							creep.moveTo(targetcontroller, {
								visualizePathStyle: { stroke: "#ffffff" },
								reusePath: 10
							});
						}
					}
				}
			} else {
				const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
				if (source) {
					if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
						creep.moveTo(source, { visualizePathStyle: { stroke: "#ffff00" } });
					}
				}
			}
		}
	}
};
export default roleRemoteUpgrader;
