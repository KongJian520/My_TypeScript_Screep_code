const BuilderW57S9 = {
	run: function (creep: Creep) {
		const targetRoom = "W57S9";
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("BU 🔄 ");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("🚧 build");
		}
		if (creep.room.name !== targetRoom) {
			creep.say("Moving");
			creep.moveTo(new RoomPosition(20, 37, targetRoom), {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 10
			});
		} else if (creep.room.name === targetRoom) {
			if (creep.memory.working) {
				const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0], {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					}
				} else if (targets.length == 0) {
					const Rtargets = creep.room.find(FIND_STRUCTURES, {
						filter: (structure: any) => {
							return structure.structureType == STRUCTURE_ROAD && structure.hits < structure.hitsMax;
						}
					});
					Rtargets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);
					if (Rtargets.length > 0) {
						if (creep.repair(Rtargets[0]) == ERR_NOT_IN_RANGE) {
							creep.moveTo(targets[0], {
								visualizePathStyle: { stroke: "#f00fff" },
								reusePath: 10
							});
						} else {
							if (creep.upgradeController(creep.room.controller!) == ERR_NOT_IN_RANGE) {
								creep.moveTo(creep.room.controller!, {
									visualizePathStyle: { stroke: "#ffffff" },
									reusePath: 10
								});
							}
						}
					}
				}
			} else {
				// const sources = Game.getObjectById<Source>("5bbca9f59099fc012e63072c")!;
				// if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
				// 	creep.moveTo(sources, {
				// 		visualizePathStyle: { stroke: "#ffaa00" },
				// 		reusePath: 10
				// 	});
				// }
				const sources = Game.getObjectById<StructureContainer>("64d4e1d69007c3d923221ac0")!;
				if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources);
				}
			}
		}
	}
};
export default BuilderW57S9;
