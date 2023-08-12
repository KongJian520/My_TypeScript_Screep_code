const LabTransferW58S14 = {
	run: function (creep: Creep) {
		const Term = Game.getObjectById("64cc047d1847494f15e51b4f") as StructureTerminal;
		const storage = Game.getObjectById("64bce1d286165e47d28a42f4") as StructureStorage;
		const Lab1 = Game.getObjectById("64cd418407af5349a897e696") as StructureLab;
		const Lab2 = Game.getObjectById("64ce1d84576ad42b277e5428") as StructureLab;
		const Lab3 = Game.getObjectById("64cdb61dfed0be7b914be5e1") as StructureLab;
		const Container = Game.getObjectById("64d637dafed0bece934dcf11") as StructureContainer;

		// this.Lab_On(creep, Lab3, storage, "GO");
		// this.Lab_Off(creep, Lab3, storage, "GO");
		// this.Lab_On(creep, Lab3, Container, "GH");

		// this.Lab_Off(creep, Lab1, storage, "H");
	},
	Lab_Off: function (creep: Creep, Lab: StructureLab, storage: StructureStorage, resType: ResourceConstant) {
		if (creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = false;
			creep.say(`🔄${resType}送回`);
		}

		if (!creep.memory.working && creep.store.getUsedCapacity(resType) == 0) {
			creep.memory.working = true;
			creep.say(`🔍${resType}寻找`);
		}
		if (creep.memory.working) {
			let result = creep.withdraw(Lab, resType);
			creep.moveTo(Lab);
			creep.say(("Working" + result) as unknown as string);
		} else if (!creep.memory.working) {
			let result = creep.transfer(storage, resType);
			creep.moveTo(storage);
			creep.say(("!wording" + result) as unknown as string);
		}
	},
	//爬爬/放入lab/在何处拿/种类
	Lab_On: function (creep: Creep, Lab3: StructureLab, storage: Structure, GOODS: ResourceConstant) {
		if (creep.memory.working && creep.store[GOODS] == 0) {
			creep.memory.working = false;
			creep.say("向仓库移动");
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say(`准备放置${GOODS}`);
		}
		if (creep.memory.working) {
			if (Lab3.store.getFreeCapacity() !== 0) {
				let result = creep.transfer(Lab3, GOODS);
				if (result == ERR_NOT_IN_RANGE) {
					creep.moveTo(Lab3);
				}
			} else {
				creep.say(`${GOODS}，出现问题`);
				creep.moveTo(25, 32);
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

export default LabTransferW58S14;
