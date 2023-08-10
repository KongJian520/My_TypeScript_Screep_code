const UpgraderW57S9 = {
	run: function (creep: Creep) {
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
			if (creep.upgradeController(creep.room.controller!) == ERR_NOT_IN_RANGE) {
				creep.moveTo(creep.room.controller!, {
					visualizePathStyle: { stroke: "#ffffff" },
					reusePath: 10
				});
			}
		} else {
			let source = Game.getObjectById<StructureContainer>("64d4f8c1a2e7ee0140f84a4b")!;
			if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source, {
					visualizePathStyle: { stroke: "#ffff00" },
					reusePath: 10
				});
			} else {
				creep.say(creep.withdraw(source, RESOURCE_ENERGY) as unknown as string);
			}
		}
	}
};

export default UpgraderW57S9;
