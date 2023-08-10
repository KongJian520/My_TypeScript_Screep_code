const LabTransferW58S14 = {
	runLabGO: function (creep: Creep) {
		const storage = Game.getObjectById("64bce1d286165e47d28a42f4") as StructureStorage;
		const Lab1 = Game.getObjectById("64ce1d84576ad42b277e5428") as StructureLab;
		const Lab2 = Game.getObjectById("64cd418407af5349a897e696") as StructureLab;
		const Lab3 = Game.getObjectById("64cdb61dfed0be7b914be5e1") as StructureLab;

		const GO = RESOURCE_GHODIUM_OXIDE;
		if (creep.memory.working && creep.store[GO] == 0) {
			creep.memory.working = false;
			creep.say("准备放置GO");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("向仓库移动");
		}
		if (creep.memory.working) {
			if (creep.withdraw(Lab3, RESOURCE_GHODIUM_OXIDE) == ERR_NOT_IN_RANGE) {
				creep.moveTo(Lab3);
			}
		} else {
			if (creep.transfer(storage, RESOURCE_GHODIUM_OXIDE) == ERR_NOT_IN_RANGE) {
				creep.moveTo(storage);
			}
		}
	}
};

export default LabTransferW58S14;
