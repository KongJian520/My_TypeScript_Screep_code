const BuilderW58S14 = {
	run: function (creep: Creep) {
		const targetRoom = "W58S14";
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
				const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
				if (targets.length !== 0) {
					if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0], {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					}
				} else if (targets.length == 0) {
					// const Flag = Game.flags.RepairFlag;
					const Flag = Game.flags.W58S14NeedToRepair;
					let structures = Flag.pos.findInRange(FIND_STRUCTURES, 1, {
						filter: structure => {
							return (
								(structure.structureType === STRUCTURE_WALL || structure.structureType === STRUCTURE_RAMPART) &&
								structure.hits < structure.hitsMax
							);
						}
					});
					structures.sort((a, b) => a.hits / a.hitsMax - b.hits / b.hitsMax);
					if (structures.length > 0) {
						// 修复第一个目标
						let target = structures[0];
						if (creep.repair(target) === ERR_NOT_IN_RANGE) {
							creep.moveTo(target, { visualizePathStyle: { stroke: "#ffffff" } });
						}
					}
				}
			} else {
				const sources = creep.room.find(FIND_STRUCTURES, {
					filter: (structure: any) => {
						return (
							(structure.structureType == STRUCTURE_TERMINAL || structure.structureType == STRUCTURE_STORAGE) &&
							structure.store.energy > 0
						);
					}
				});
				if (sources.length > 0) {
					const closestContainer = creep.pos.findClosestByPath(sources);
					if (closestContainer) {
						if (creep.withdraw(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
							creep.moveTo(closestContainer);
						}
					}
				} else {
					creep.memory.working = true;
				}
			}
		}
	}
};
export default BuilderW58S14;
