export const BuilderW46S12 = {
	upgradeController: function (creep: Creep): void {
		const controller = creep.room.controller;
		if (controller && creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
			creep.moveTo(controller, {
				visualizePathStyle: { stroke: "#ffffff" },
				reusePath: 10
			});
		}
	},
	run: function (creep: Creep) {
		const targetRoom = "W46S12";
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("BU 🔄 ");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧");
		}
		if (creep.room.name !== targetRoom) {
			creep.say("Moving");
			creep.moveTo(new RoomPosition(20, 37, targetRoom), {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 10
			});
		} else if (creep.room.name === targetRoom) {
			if (creep.memory.working) {
				const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					let colesttargets = creep.pos.findClosestByPath(targets);
					if (colesttargets) {
						if (creep.build(colesttargets) == ERR_NOT_IN_RANGE) {
							creep.moveTo(colesttargets, {
								visualizePathStyle: { stroke: "#ffffff" },
								reusePath: 10
							});
						}
					}
				} else {
					this.upgradeController(creep);
				}
			} else {
				let source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
					filter: s =>
						(s.structureType === STRUCTURE_STORAGE ||
							s.structureType == STRUCTURE_CONTAINER ||
							s.structureType == STRUCTURE_TERMINAL) &&
						s.store.getUsedCapacity(RESOURCE_ENERGY) !== 0
				})!;
				if (source !== undefined) {
					if (creep.withdraw(source, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
						creep.say("移动中");
						creep.moveTo(source, { visualizePathStyle: { stroke: "#ffaa00" } });
					}
				} else {
					creep.memory.working = true;
				}
			}
		}
	}
};
