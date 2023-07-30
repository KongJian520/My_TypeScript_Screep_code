const roleChaiQian = {
	run: function (creep: any) {
		const targetRoom = "W58S15"
		var Home = 'W58S16';
		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say('RCQ 拆');
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say('RCQ 存');
		} if (creep.memory.working) {
			if (creep.room.name !== targetRoom) {
				creep.moveTo(new RoomPosition(12, 47, targetRoom), { visualizePathStyle: { stroke: '#ff0000' } })
			} else if (creep.room.name === targetRoom) {
				var targets = creep.room.find(FIND_HOSTILE_STRUCTURES, {//寻找设施存入 target
					filter: (structure: any) => {
						return (structure.structureType == STRUCTURE_SPAWN||
							structure.structureType == STRUCTURE_TOWER||
							structure.structureType == STRUCTURE_EXTENSION ||
							structure.structureType == STRUCTURE_CONTAINER
						)
					}
				});
				if (targets[0]) {
					if (creep.dismantle(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ff0000' } });
					}
				} else {
					// creep.say(creep.dismantle(targets))
					creep.moveTo(new RoomPosition(33, 3, targetRoom), { visualizePathStyle: { stroke: '#ff0000' } })
				}
			}
		}


	},
};
export default roleChaiQian;
