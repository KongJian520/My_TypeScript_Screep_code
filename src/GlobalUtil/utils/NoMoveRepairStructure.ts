export const noMoveRepairStructure = (creep: Creep) => {
	const repairTargets = creep.pos.findInRange(FIND_MY_STRUCTURES, 2, {
		filter: (structure: any) => {
			return structure.structureType !== STRUCTURE_WALL && structure.hits < structure.hitsMax;
		}
	});
	// 如果周围有需要修复的建筑，优先修复它们
	if (repairTargets.length > 0) {
		repairTargets.sort((a: any, b: any) => a.hits / a.hitsMax - b.hits / b.hitsMax);
		creep.repair(repairTargets[0]);
	}
};
