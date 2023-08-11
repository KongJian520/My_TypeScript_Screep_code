const LabTransfer = {
	run: function (creep: Creep) {
		const storage = Game.getObjectById("64ae33b7d36572291f61089a") as StructureStorage;
		const Lab1 = Game.getObjectById("64c3e1f07e68f82e2d5f13fa") as StructureLab;
		const Lab2 = Game.getObjectById("64c39dae5785eddb4042cbb6") as StructureLab;
		const Lab3 = Game.getObjectById("64c3f9afb10a865fabd2ebf0") as StructureLab;

		this.Lab_On(creep, Lab1, storage);
	},
	Lab_Off: function (creep: Creep, Lab: StructureLab, storage: StructureStorage) {
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say("🔄O送回");
		}
		if (!creep.memory.working && creep.store["GO"] == 0) {
			creep.memory.working = true;
			creep.say("🔍O寻找");
		}
		if (creep.memory.working) {
			let result = creep.withdraw(Lab, "GO");
			creep.moveTo(Lab);
			creep.say(("Working" + result) as unknown as string);
		} else if (!creep.memory.working) {
			let result = creep.transfer(storage, "GO");
			creep.moveTo(storage);
			creep.say(("!wording" + result) as unknown as string);
		}
	},

	Lab_On: function (creep: Creep, Lab3: StructureLab, storage: StructureStorage) {
		const GOODS = RESOURCE_HYDROGEN;
		if (creep.memory.working && creep.store[GOODS] == 0) {
			creep.memory.working = false;
			creep.say("向仓库移动");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say(`准备放置${GOODS}`);
		}
		if (creep.memory.working) {
			if (creep.transfer(Lab3, GOODS) == ERR_NOT_IN_RANGE) {
				creep.moveTo(Lab3);
			}
		} else {
			if (creep.withdraw(storage, GOODS) == ERR_NOT_IN_RANGE) {
				creep.moveTo(storage);
			} else {
				creep.memory.working = true;
			}
		}
	}
};

export default LabTransfer;
