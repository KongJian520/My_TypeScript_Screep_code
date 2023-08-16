const EnergyTransfer1W56S8 = {
	run(creep: Creep): void {
		const targetRoom = "W56S8"; // 目标房间的名字
		const Home = "W57S9";
		// 判断 creep 是否在目标房间内
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("🔄 ");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚚");
		}
		if (!creep.memory.working) {
			if (creep.room.name !== targetRoom) {
				creep.say("Moving");
				creep.moveTo(new RoomPosition(20, 37, targetRoom), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 10
				});
			} else if (creep.room.name === targetRoom) {
				const containers = Game.getObjectById<StructureContainer>("64dcc29f50690321f1c02480")!;
				if (creep.withdraw(containers, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
					creep.moveTo(containers, { visualizePathStyle: { stroke: "#ffffff" } });
				}
			}
		} else {
			if (creep.room.name !== Home) {
				creep.say("Moving");
				creep.moveTo(new RoomPosition(20, 37, Home), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 10
				});
				let nearNeedToRepair = creep.pos.findInRange(FIND_STRUCTURES, 2, {
					filter: (structure: Structure) => structure.hits !== structure.hitsMax
				});
				creep.repair(nearNeedToRepair[0]);
			} else {
				const targetStorage = Game.rooms[Home].storage;
				if (targetStorage) {
					if (creep.transfer(targetStorage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
						creep.moveTo(targetStorage, { visualizePathStyle: { stroke: "#ffffff" } });
						let nearNeedToRepair = creep.pos.findInRange(FIND_MY_STRUCTURES, 2, {
							filter: (structure: Structure) => structure.hits !== structure.hitsMax
						});
						creep.repair(nearNeedToRepair[0]);
					}
				}
			}
		}
	}
};

export default EnergyTransfer1W56S8;
