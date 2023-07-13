const roleBuilder = {
	run: function (creep: any) {
		if (creep.ticksToLive <= 200) {
			if (Game.spawns['Spawn1'].renewCreep(creep) == ERR_NOT_IN_RANGE) {
				creep.moveTo(31, 36, "W58S16")
			}
		} else {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if (targets.length == 0) {
				if (_.filter(Game.creeps, (creep) => creep.memory.role == 'repair').length < 6) {
					creep.memory.role = "repair"
				}
				else if ((_.filter(Game.creeps, (creep) => creep.memory.role == 'builder').length) < 5) {
					creep.memory.role = "remoteBuilder"
				}
			}
			if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
				creep.memory.building = false;
				creep.say('🔄 harvest');
			}
			if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
				creep.memory.building = true;
				creep.say('🚧 build');
			}
			if (creep.memory.building) {
				if (targets.length > 0) {
					if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
					}
				} else {

				}

				// else if (targets.length == 0){
				// 	creep.memory.role= "repair"
				// }
				// var targets2 = creep.room.find(FIND_STRUCTURES, {
				// 	filter: (i: any) => i.structureType == STRUCTURE_CONTAINER||i.structureType == STRUCTURE_STORAGE &&
				// 		i.store[RESOURCE_ENERGY] >= 0
				// });
			}
			else {
				// var sources = creep.room.find(FIND_SOURCES);
				// if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				// 	creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 4 });
				// }

				var sources = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) => {
						return (
							// structure.structureType == STRUCTURE_CONTAINER ||
							structure.structureType == STRUCTURE_STORAGE &&
							structure.store.energy > 0);
					}
				});
				// 如果找到了 container
				if (sources.length > 0) {
					// 使用 pos.findClosestByPath 方法找到距离最近的 container
					var closestContainer = creep.pos.findClosestByPath(sources);

					// 如果找到了最近的 container
					if (closestContainer) {
						// creep.say('UP 最近的找到了')
						// 移动到最近的 container 并从中取出能量
						if (creep.withdraw(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(closestContainer);
						}
					}
				}
				if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
				}
			}
		}

	},
};
export default roleBuilder;
