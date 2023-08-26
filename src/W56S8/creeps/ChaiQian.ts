export const ChaiQian = {
	run(creep: Creep) {
		const targetFlag = Game.flags.Team1_NeedToAttack;

		const found = targetFlag.pos.lookFor(LOOK_STRUCTURES);
		if (found.length !== 0) {
			let result = creep.dismantle(found[0]);
			creep.moveTo(found[0]);
			if (result == 0) {
				creep.cancelOrder(MOVE);
			}
		} else {
			creep.moveTo(targetFlag);
			let target = creep.room.find(FIND_HOSTILE_STRUCTURES, {
				filter: (structure: any) =>
					structure.structureType === STRUCTURE_EXTRACTOR ||
					structure.structureType === STRUCTURE_LINK ||
					// structure.structureType === STRUCTURE_RAMPART ||
					structure.structureType === STRUCTURE_EXTENSION ||
					structure.structureType === STRUCTURE_SPAWN ||
					structure.structureType === STRUCTURE_TOWER
			});
			if (target) {
				let colestTarget = creep.pos.findClosestByPath(target);
				if (colestTarget) {
					let result = creep.dismantle(colestTarget);
					creep.moveTo(colestTarget);
					if (result == 0) {
						creep.cancelOrder(MOVE);
					}
				}
			} else {
				creep.say(`CQ 🔍❌`);
			}
		}
	}
};
