const roleDismveableminer = {
	run: function (creep: Creep) {
		const sources = Game.getObjectById("5bbca9eb9099fc012e6305b4") as Source;
		const link = creep.pos.findInRange(FIND_STRUCTURES, 1, {
			filter: structure => {
				return structure.structureType === STRUCTURE_LINK;
			}
		});
		creep.moveTo(16, 39);
		// const tower = Game.getObjectById<StructureTower>('64c88912658de88bc8d77990')!
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
			const tower = Game.getObjectById<StructureTower>("64dcc32b1d73224f430da711")!;
			const Link = Game.getObjectById<StructureLink>("64c0730c64271e64bf03f388")!;
			if (tower.store.energy < 800) {
				creep.say("Tower");
				creep.transfer(tower, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			} else if (tower.store.getUsedCapacity(RESOURCE_ENERGY) > 10) {
				creep.say("continer");
				creep.transfer(Link, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
			}
		}
	}
};
export default roleDismveableminer;
