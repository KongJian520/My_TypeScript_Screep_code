const roleRemoteUpgrader = {
	run: function (creep: Creep) {
		var targetRoom = 'W58S14';
		var targetcontroller = Game.rooms[targetRoom].controller
		var Home = 'W58S16';
		var Storage = Game.rooms[Home].storage
		if (targetcontroller == undefined) {
			creep.moveTo(new RoomPosition(20, 37, targetRoom), { visualizePathStyle: { stroke: '#ffaa00' } })
		} else if (targetcontroller !== undefined) {
			if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
				creep.memory.working = false;
				creep.say('RUP 🔄 ');
			}
			if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
				creep.memory.working = true;
				creep.say('RUP ⚡');
			}
			if (creep.memory.working) {
				if (creep.room.name !== targetRoom) {
					creep.say('Moving')
					creep.moveTo(new RoomPosition(20, 37, targetRoom), { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 10 })
				} else if (creep.room.name === targetRoom) {
					if (creep.memory.working) {
						if (creep.upgradeController(targetcontroller) == ERR_NOT_IN_RANGE) {
							creep.moveTo(targetcontroller, { visualizePathStyle: { stroke: '#ffffff' }, reusePath: 10 });
						}
					}
				}
			} else {
				if (creep.room.name !== Home) {
					creep.moveTo(new RoomPosition(31, 37, Home))
				} else if (creep.room.name == Home) {
					if (Storage) {
						if (creep.withdraw(Storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(Storage, { visualizePathStyle: { stroke: '#ffaa00' }, reusePath: 10 });
						}
					}
				}
			}
		}
		// if (Game.rooms["W58S15"].find(FIND_CONSTRUCTION_SITES).length == 0){
		// 	creep.memory.role = 'remoteHavster'
		// }

	},
};
export default roleRemoteUpgrader;
