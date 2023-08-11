import dismoveableminer from "./dismoveableminer";

const roleUpgrader = {
	run: function (creep: Creep) {
		const WORK_BODY = WORK;

		if (_.filter(Game.creeps, c => c.memory.role === "dismoveableminer").length === 0) {
			dismoveableminer.run(creep);
			return;
		}
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
				creep.moveTo(controller, { visualizePathStyle: { stroke: "#ffffff" }, reusePath: 10 });
			}
		} else {
			const LAB = Game.getObjectById<StructureLab>("64c3f9afb10a865fabd2ebf0")!;
			if (
				creep.body.some(part => part.type === WORK_BODY && part.boost) &&
				LAB.store.energy >= 20 &&
				LAB.store.GH >= 30 &&
				creep.ticksToLive! > 300
			) {
				let result = LAB.boostCreep(creep);
				creep.say(result as unknown as string);
				if (result === ERR_NOT_IN_RANGE) {
					creep.moveTo(LAB);
				}
			} else {
				if (creep.ticksToLive! < 150) {
					let result = LAB.unboostCreep(creep);
					if (result === ERR_NOT_IN_RANGE) {
						creep.moveTo(LAB);
					} else if (result == OK) {
						creep.suicide();
					}
				}
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
							creep.moveTo(closestSource, { visualizePathStyle: { stroke: "#ffffff" }, reusePath: 10 });
						}
					}
				} else {
					creep.memory.working = true;
				}
			}
		}
	}
};

export default roleUpgrader;
