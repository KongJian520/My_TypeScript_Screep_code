import { PickUpDrop } from "../../GlobalUtil/utils/PickUpDrop";
import { noMoveRepairStructure } from "../../GlobalUtil/utils/NoMoveRepairStructure";

export const RemoteScavenger = {
	run: function (creep: Creep) {
		const homeRoom = creep.memory.room;
		const targetRoom = "W55S8";
		const storage = Game.rooms[homeRoom].storage!;
		if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
			creep.memory.working = true;
			creep.say("回");
		}
		if (creep.memory.working && creep.store.getUsedCapacity() === 0) {
			creep.memory.working = false;
			creep.say("去拾取");
		}
		if (creep.memory.working) {
			noMoveRepairStructure(creep);
			if (creep.room.name !== homeRoom) {
				creep.moveTo(new RoomPosition(10, 30, homeRoom), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 6
				});
			} else {
				if (storage) {
					for (const resourceType in creep.store) {
						if (creep.transfer(storage, resourceType as ResourceConstant) === ERR_NOT_IN_RANGE) {
							creep.moveTo(storage, {
								visualizePathStyle: { stroke: "#ffffff" },
								reusePath: 6
							});
						}
					}
				}
			}
		} else {
			if (creep.room.name !== targetRoom) {
				creep.moveTo(new RoomPosition(10, 30, targetRoom), {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 6
				});
			} else {
				const Ruins = creep.pos.findClosestByPath(FIND_RUINS, {
					filter: (structure: Ruin) => structure.store.getUsedCapacity() > 0
				});
				if (Ruins) {
					creep.say(`Ruin`);
					creep.moveTo(Ruins, {
						visualizePathStyle: { stroke: "#ffffff" },
						reusePath: 6
					});
					for (let ResType in Ruins.store) {
						creep.withdraw(Ruins, ResType as ResourceConstant);
					}
				} else if (PickUpDrop(creep) == -100) {
					creep.memory.working = true;
				}
			}
		}
	}
};
