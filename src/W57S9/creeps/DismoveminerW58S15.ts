const roleDismveableminer = {
	run: function (creep: Creep) {
		// console.log(creep.pos);
		creep.moveTo(11, 44);
		const sources = Game.getObjectById("5bbca9eb9099fc012e6305b9") as Source;
		const continer = Game.getObjectById("64d24c9916e76858d1711609") as StructureContainer;

		if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = true;
			creep.say("挖中");
		}
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say("放");
		}
		if (creep.memory.working) {
			creep.say(creep.harvest(sources) as unknown as string);
		} else {
			creep.say("continer");
			creep.transfer(continer, RESOURCE_ENERGY, creep.store[RESOURCE_ENERGY]);
		}
		if (continer.hits < 200000 && creep.store.energy > 50) {
			creep.repair(continer);
		}
	}
};
export default roleDismveableminer;
