const Transfer2W58S15 = {
	runEnergy: function (creep: Creep) {
		const sources = Game.getObjectById("64d23cf640a8b33dd1aa7a9c") as StructureContainer;
		const targets = Game.getObjectById("64d25b5eabe1ba48401e7e6b") as StructureStorage;
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("找contianer中");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("运输中");
		}
		if (!creep.memory.working) {
			if (sources) {
				if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources, {
						visualizePathStyle: { stroke: "#ffaa00" },
						reusePath: 10
					});
				}
			}
		} else if (creep.memory.working) {
			if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(targets, {
					visualizePathStyle: { stroke: "#ffffff" },
					reusePath: 10
				});
			}
		}
	},
	runMineral: function (creep: Creep) {
		const sources = Game.getObjectById("5bbcb10940062e4259e92a53") as Mineral;
		const Container = Game.getObjectById("64c8cfac58c500a5a104799d") as StructureContainer;
		const storage = Game.getObjectById("64ae33b7d36572291f61089a") as StructureStorage;
		if (creep.memory.working && creep.store[sources.mineralType] == 0) {
			creep.memory.working = false;
			creep.say("准备拿取资源");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("向仓库移动");
		}
		if (!creep.memory.working) {
			if (creep.withdraw(Container, sources.mineralType) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources, {
					visualizePathStyle: { stroke: "#ffff00" },
					reusePath: 10
				});
			}
		} else {
			if (creep.transfer(storage, _.keys(creep.store)[0] as ResourceConstant) == ERR_NOT_IN_RANGE) {
				creep.moveTo(storage, {
					visualizePathStyle: { stroke: "#ffff00" },
					reusePath: 10
				});
			}
		}
	}
};

export default Transfer2W58S15;