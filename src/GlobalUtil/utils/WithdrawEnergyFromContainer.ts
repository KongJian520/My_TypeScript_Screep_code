export const WithdrawEnergyFromContainer = (creep: Creep, ContianerId: string) => {
	//从所给ID拿资源,如果能量为0则creep.memory.working = false
	let Container = Game.getObjectById<StructureStorage>(ContianerId);
	if (Container) {
		if (Container.store.energy !== 0) {
			creep.moveTo(Container, {
				visualizePathStyle: { stroke: "#fffa00" },
				reusePath: 10
			});
			creep.withdraw(Container, RESOURCE_ENERGY);
		} else {
			creep.memory.working = true;
		}
	} else {
		creep.say("🔍❌");
		creep.memory.working = true;
	}
};
