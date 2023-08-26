export const BuildByPath = (creep: Creep) => {
	const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
	if (targets.length !== 0) {
		let colesttargets = creep.pos.findClosestByPath(targets);
		if (colesttargets) {
			creep.moveTo(colesttargets, {
				visualizePathStyle: { stroke: "#ffffff" },
				reusePath: 10
			});
			creep.build(colesttargets);
		}
	} else {
		creep.say("🔍❌");
	}
};
export const noMoveBuildByPath = (creep: Creep) => {
	const targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
	if (targets.length !== 0) {
		let colesttargets = creep.pos.findClosestByPath(targets);
		if (colesttargets) {
			creep.build(colesttargets);
		}
	}
};
