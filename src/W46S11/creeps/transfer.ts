const Transfer = {
	run: function (creep: Creep) {
		if (_.filter(Game.creeps, creep => creep.memory.role == "Dismveableminer3").length !== 0) {
			const Container = Game.getObjectById("64d15b51691b1ed3cd8308d1") as StructureContainer;
			if (Container.store[RESOURCE_ENERGY] !== 0) {
				this.runEnergy(creep, Container);
			} else {
				this.runMineral(creep);
			}
		} else {
			const Container = Game.getObjectById("64d6edc29e07e737ff38c47f") as StructureContainer;
			this.runEnergy(creep, Container);
		}
	},

	runEnergy: function (creep: Creep, sources: StructureContainer) {
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("找contianer中");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("运输中");
		}
		if (!creep.memory.working) {
			// 如果找到了 sources
			if (sources) {
				if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources, { visualizePathStyle: { stroke: "#ffaa00" } });
				}
			} else {
				creep.memory.working = true;
			}
		} else if (creep.memory.working) {
			const targets = creep.room.find(FIND_STRUCTURES, {
				filter: (structure: any) => {
					return structure.structureType == STRUCTURE_STORAGE && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
				}
			});
			if (targets.length > 0) {
				const STORAGE = creep.pos.findClosestByPath(targets);
				if (STORAGE) {
					if (creep.transfer(STORAGE, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(STORAGE, { visualizePathStyle: { stroke: "#ffffff" } });
					}
				}
			}
		}
	},
	runMineral: function (creep: Creep) {
		const sources = Game.getObjectById("5bbcb10940062e4259e92a53") as Mineral;
		const Container = Game.getObjectById("64d15b51691b1ed3cd8308d1") as StructureContainer;
		const storage = Game.getObjectById("64c33d512dc85d0e59b44d16") as StructureTerminal;
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
				creep.moveTo(Container);
			} else {
				creep.memory.working = true;
			}
		} else {
			if (creep.transfer(storage, _.keys(creep.store)[0] as ResourceConstant) == ERR_NOT_IN_RANGE) {
				creep.moveTo(storage);
			}
		}
	}
};

export default Transfer;
