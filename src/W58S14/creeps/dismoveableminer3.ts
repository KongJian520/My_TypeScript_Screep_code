const roleDismveableminer3 = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById("5bbcb10940062e4259e92a51") as Mineral;
		if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
			creep.moveTo(sources, { visualizePathStyle: { stroke: "#ffaa00" }, reusePath: 6 });
		}
		creep.moveTo(15, 9, { visualizePathStyle: { stroke: "#ffaa00" }, reusePath: 6 });
	}
};

export default roleDismveableminer3;
