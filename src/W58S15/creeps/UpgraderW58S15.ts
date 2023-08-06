const roleUpgrader = {
	run: function (creep: any) {
		const source = Game.getObjectById("64cf2666bee72abe30889401") as StructureContainer;
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("🔄");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("升级中");
		}
		if (creep.memory.working) {
			creep.say("Uping");

			if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
				creep.moveTo(creep.room.controller, {
					visualizePathStyle: { stroke: "#ffffff" },
					reusePath: 10
				});
			}
		} else {
			// let sources = creep.room.find(FIND_SOURCES);
			// if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
			// 	creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#ffaa00" } });
			// }
			if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source, {
					visualizePathStyle: { stroke: "#ffff00" },
					reusePath: 10
				});
			}
		}
	}
};

export default roleUpgrader;
