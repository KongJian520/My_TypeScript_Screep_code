const Dismveableminer2 = {
	run: function (creep: Creep) {
		// console.log(creep.pos);
		creep.moveTo(20, 36);
		const sources = Game.getObjectById("5bbca9eb9099fc012e6305b8") as Source;
		const continer = Game.getObjectById("64d23cf640a8b33dd1aa7a9c") as StructureContainer;
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
			const tower = Game.getObjectById<StructureTower>("64d24c9916e76858d1711609")!;
			if (tower.store.energy < 10) {
				creep.say("Tower");
				creep.transfer(tower, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			} else if (tower.store.getUsedCapacity(RESOURCE_ENERGY) > 10) {
				creep.say("continer");
				creep.transfer(continer, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			}
			if (continer.hits < 200000 && creep.store.energy > 50) {
				creep.repair(continer);
			}
		}
	}
};
export default Dismveableminer2;
