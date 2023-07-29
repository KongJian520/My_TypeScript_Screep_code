
const roleBuilder = {
	run: function (creep: any) {
		var targets = creep.room.find(FIND_CONSTRUCTION_SITES)
		targets.sort((a: ConstructionSite, b: ConstructionSite) => a.progressTotal - b.progressTotal);
		if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.building = false;
			creep.say('BU 🔄');
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
				{
					if (creep.memory.working && creep.carry.energy == 0) {
						creep.memory.working = false;
						creep.say('🔄 harvest');
					}
					else if (!creep.memory.working && creep.memory.target != '' && creep.carry.energy == creep.carryCapacity) {
						creep.memory.working = true;
						delete creep.memory.source
						creep.say('⬆repair');
					}
					else if (!creep.memory.working && creep.memory.target == '' && creep.carry.energy == creep.carryCapacity) {
						creep.memory.working = true;
						delete creep.memory.source
						creep.say('♻️transfer');
					}
					if (creep.memory.working) {
						const targets = creep.room.find(FIND_STRUCTURES, {
							filter: (structure: any) => {
								return (
									(structure.structureType == STRUCTURE_CONTAINER ||
										// ||structure.structureType == STRUCTURE_ROAD
										// structure.structureType == STRUCTURE_RAMPART
										structure.structureType == STRUCTURE_WALL
									) && structure.hits < structure.hitsMax * 0.8)
							}
						});
						targets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);
						if (targets.length > 0) {
							if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
								creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#f00fff' }, reusePath: 10 });
							}
						}
					} else {
						var containers = creep.room.find(FIND_STRUCTURES, {
							filter: (s: any) => (
								// s.structureType == STRUCTURE_CONTAINER ||
								s.structureType == STRUCTURE_STORAGE
								&& s.store.energy <= s.storeCapacity)
						});
						// containers.sort((a: any, b: any) => b.store.energy -  a.store.energy );
						if (creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(containers[0], { visualizePathStyle: { stroke: '#ffaa00' } });
						}
					}
				}
			}
		}
		else {
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
	},
};
export default roleBuilder;
