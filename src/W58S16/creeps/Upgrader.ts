const UpgraderW58S16 = {
	run: function (creep: Creep) {
		// Upgrade Controller logic
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
			creep.memory.working = false;
			creep.say("🔄");
		}

		if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
			creep.memory.working = true;
			creep.say("Uping");
		}

		if (creep.memory.working) {
			const controller = creep.room.controller;
			if (controller && creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
				creep.moveTo(controller, {
					visualizePathStyle: { stroke: "#ffffff" },
					reusePath: 10
				});
			}
		} else {
			const LAB = Game.getObjectById<StructureLab>("64c3f9afb10a865fabd2ebf0")!;
			if (LAB.store.energy >= 20 && LAB.store.GH >= 30) {
				if (creep.ticksToLive! > 300) {
					if (!creep.body.some(part => part.type === WORK && part.boost)) {
						creep.say("可以强化");
						let result = LAB.boostCreep(creep);
						creep.say(result as unknown as string);
						if (result === ERR_NOT_IN_RANGE) {
							creep.moveTo(LAB);
						}
						if (result === OK) {
							creep.say("强化成功");
						}
					}
				}
			} else {
				if (creep.ticksToLive! < 150) {
					let result = LAB.unboostCreep(creep);
					if (result === ERR_NOT_IN_RANGE) {
						creep.moveTo(LAB, {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					} else if (result == ERR_BUSY) {
						creep.moveTo(LAB, {
							visualizePathStyle: { stroke: "#ffffff" },
							reusePath: 10
						});
					}
					if (result == OK) {
						creep.suicide();
					}
				} else {
					const sources = creep.room.find(FIND_STRUCTURES, {
						filter: (structure: any) => {
							return (
								(structure.structureType === STRUCTURE_STORAGE || structure.structureType === STRUCTURE_TERMINAL) &&
								structure.store.energy > 200
							);
						}
					});
					if (sources.length > 0) {
						const closestSource = creep.pos.findClosestByPath(sources);
						if (closestSource) {
							if (creep.withdraw(closestSource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
								creep.moveTo(closestSource, {
									visualizePathStyle: { stroke: "#ffffff" },
									reusePath: 10
								});
							}
						}
					} else {
						creep.memory.working = true;
					}
				}
			}
		}
	}
};

export default UpgraderW58S16;
