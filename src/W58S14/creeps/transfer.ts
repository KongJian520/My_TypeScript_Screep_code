const roletransfer = {
	run: function (creep: Creep) {
		const Container = Game.getObjectById("64ccae63fb14a1a07f57d4c0") as StructureContainer;
		if (Container.store[RESOURCE_ENERGY] !== 0) {
			this.runEnergy(creep);
		} else {
			this.runMineral(creep);
		}
	},

	runEnergy: function (creep: Creep) {
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("找contianer中");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("运输中");
		}
		if (!creep.memory.working) {
			const sources = creep.room.find(FIND_STRUCTURES, {
				filter: (structure: any) => {
					return structure.structureType == STRUCTURE_CONTAINER && structure.store.energy > 0;
				}
			});
			// 如果找到了 sources
			if (sources.length > 0) {
				sources.sort((a: any, b: any) => b.store.energy - a.store.energy);
				if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#ffaa00" } });
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
		const sources = Game.getObjectById("5bbcb10940062e4259e92a51") as Mineral;
		const Container = Game.getObjectById("64ccae63fb14a1a07f57d4c0") as StructureContainer;
		const storage = Game.getObjectById("64cc047d1847494f15e51b4f") as StructureTerminal;
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

export default roletransfer;
