const Transfer2W57S9 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById("64d48f2613ecbf1099277d31") as StructureContainer;
		const targets = Game.getObjectById("64d4e1d69007c3d923221ac0") as StructureStorage;
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("找contianer中");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("运输中");
		}
		if (!creep.memory.working) {
			if (sources.store.energy !== 0) {
				if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources, {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 10
					});
				}
			} else {
				creep.memory.working = true;
			}
		} else if (creep.memory.working) {
			if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(targets, {
					visualizePathStyle: { stroke: "#ffffff" },
					reusePath: 10
				});
			}
		}
	}
};

export default Transfer2W57S9;
