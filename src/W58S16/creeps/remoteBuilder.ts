const roleBuilder = {
	run(creep: Creep): void {
		let targetRoom = 'W57S13'
		if (targetRoom && creep.room.name !== targetRoom) {
			// 如果当前不在目标房间，就移动过去
			// const exit = creep.room.findExitTo(targetRoom);
			creep.moveTo(new RoomPosition(25, 20, targetRoom), {visualizePathStyle: {stroke: '#ffaa00'}});
			return;
		}

		if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
			creep.memory.working = false;
			creep.say('🔄 harvest');
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
			creep.memory.working = true;
			creep.say('🚧 build');
		}

		if (creep.memory.working) {
			const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if (targets.length) {
				if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
				}
			} else {
				// 没有建筑工地，进行修复操作
				const structuresToRepair = creep.room.find(FIND_STRUCTURES, {
					filter: structure => structure.hits < structure.hitsMax && structure.structureType !== STRUCTURE_WALL && structure.structureType !== STRUCTURE_RAMPART
				});

				if (structuresToRepair.length) {
					if (creep.repair(structuresToRepair[0]) === ERR_NOT_IN_RANGE) {
						creep.moveTo(structuresToRepair[0], {visualizePathStyle: {stroke: '#00ff00'}});
					}
				}
			}
		} else {
			const sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
			}
		}
	},
};

export default roleBuilder;
