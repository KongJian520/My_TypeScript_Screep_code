const roleChaiQian = {
	run: function (creep: any) {
		const targetRoom = "W58S15"
		var Home = 'W58S16';
		var targets = creep.room.find(FIND_STRUCTURES, {
			filter: (structure: any) => {
				return (structure.structureType == STRUCTURE_WALL)
			}
		})
		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say('RCQ 拆');
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say('RCQ 存');
		} if (creep.memory.working) {
			if (creep.room.name !== targetRoom) {
				creep.moveTo(new RoomPosition(20, 37, 'W58S15'), { visualizePathStyle: { stroke: '#ff0000' } })
			} else if (creep.room.name === targetRoom) {
				creep.say(creep.dismantle(targets))
				if (targets) {
					if (creep.dismantle(targets) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets, { visualizePathStyle: { stroke: '#ff0000' } });
					}
				}
			}
		} else if (!creep.memory.working) {
			if (creep.room.name !== Home) {
				creep.moveTo(new RoomPosition(31, 37, 'W58S16'))
			} else {
				var targetss = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) => {
						return (
							// structure.structureType == STRUCTURE_CONTAINER||
							structure.structureType == STRUCTURE_STORAGE) &&
							structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
					}
				});
				if (targetss.length > 0) {
					var closestContainer = creep.pos.findClosestByPath(targetss);
					if (closestContainer) {
						// creep.say('RH 最近的找到了')
						// 移动到最近的 container 并从中放入能量
						if (creep.transfer(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(closestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
						}
					}
				}

			}
		}
	},
};
export default roleChaiQian;
