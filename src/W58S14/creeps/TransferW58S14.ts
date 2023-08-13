const Transfer2W58S14 = {
	run: function (creep: Creep) {
		const Container = Game.getObjectById("64d8857d4098bde67d436766") as StructureContainer;
		const Storage = Game.getObjectById("64bce1d286165e47d28a42f4") as StructureStorage;
		if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.working = false;
			creep.say("寻找能量");
			this.toContainer(creep, Container);
		}
		if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
			creep.memory.working = true;
			creep.say("运输到up");
			this.toStorage(creep, Storage);
		}
		if (!creep.memory.working) {
			if (Container.store.energy !== 0) {
				this.toContainer(creep, Container);
			} else {
				creep.memory.working = true;
			}
		} else if (creep.memory.working) {
			this.toStorage(creep, Storage);
		}
	},
	toStorage: function (creep: Creep, Storage: StructureStorage) {
		if (creep.transfer(Storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			creep.moveTo(Storage, {
				visualizePathStyle: { stroke: "#ffffff" },
				reusePath: 10
			});
		}
	},
	toContainer: function (creep: Creep, Container: StructureContainer) {
		if (creep.withdraw(Container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			creep.moveTo(Container, {
				visualizePathStyle: { stroke: "#ffaa00" },
				reusePath: 10
			});
		}
	}
};

export default Transfer2W58S14;
