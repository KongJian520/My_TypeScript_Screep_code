const roleHarvester = {
	run(creep: Creep) {
		if (creep.store.getFreeCapacity() == 0) {
			creep.say('H 开始干活')
			creep.memory.working = true
		} else if (creep.store.energy == 0) {
			creep.say('H 准备充能')
			creep.memory.working = false
		}
		if (creep.memory.working) {
			creep.moveTo(43, 32, {
				visualizePathStyle: {stroke: '#ffaa00'},
				reusePath: 4
			});
			const targets = creep.room.find(FIND_STRUCTURES, {//寻找设施存入 target
				filter: (structure: any) => {
					return (
							// structure.structureType == STRUCTURE_STORAGE ||
							structure.structureType == STRUCTURE_SPAWN ||
							structure.structureType == STRUCTURE_EXTENSION
						) &&
						structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
				}
			});
			if (targets.length > 0) {
				if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {
						visualizePathStyle: {stroke: '#ffffff'},
						reusePath: 4
					});//工作运输
				}
			}

		} else {
			const sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(43, 32, {
					visualizePathStyle: {stroke: '#ffaa00'},
					reusePath: 4
				});
			}
		}
	},
};

export default roleHarvester;
