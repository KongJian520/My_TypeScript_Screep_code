const roleGuard = {
	run(creep: Creep): void {
		if (creep.hits < creep.hitsMax * 0.7) {
			creep.heal(creep);
		} else {
			const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
			if (target) {
				if (creep.attack(target) === ERR_NOT_IN_RANGE) {
					creep.moveTo(target, { visualizePathStyle: { stroke: "#ff0000" } });
				}
			} else {
				creep.moveTo(25, 19, { visualizePathStyle: { stroke: "#ffffff" } });
			}
		}
	}
};

export default roleGuard;
