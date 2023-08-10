const Dismveableminer2W57S9 = {
	run: function (creep: Creep) {
		creep.moveTo(14, 16);
		const sources = Game.getObjectById("5bbca9f59099fc012e63072c") as Source;
		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say("挖中");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			// creep.say('放');
		}
		if (creep.memory.working) {
			if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources, {
					visualizePathStyle: { stroke: "#ffaa00" },
					reusePath: 6
				});
			} else if (sources.energy == 0) {
				creep.memory.working = false;
			}
		} else if (!creep.memory.working) {
			const tower = Game.getObjectById<StructureTower>("64d46ee982ec1b18b158e1a4")!;
			const continer = Game.getObjectById("64d48f2613ecbf1099277d31") as StructureContainer;
			if (tower.store.energy < 10) {
				creep.say("Tower");
				creep.transfer(tower, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			} else if (tower.store.getUsedCapacity(RESOURCE_ENERGY) > 10) {
				creep.say("continer");
				creep.transfer(continer, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			}
		}
	}
};
export default Dismveableminer2W57S9;
