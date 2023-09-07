export const WithdrawFromContainer = (creep: Creep, ContainerId: string, resourceType: ResourceConstant) => {
	//从所给ID拿资源,如果能量为0则creep.memory.working = true
	let Container = Game.getObjectById<StructureContainer>(ContainerId)!;
	creep.moveTo(Container, {
		visualizePathStyle: { stroke: "#ffaa00" },
		reusePath: 10
	});
	if (Container.store.energy !== 0) {
		let result = creep.withdraw(Container, resourceType);
		creep.say(`${result}`);
		if (result == OK) creep.cancelOrder(MOVE);
	} else if (Container.store.energy == 0) {
		creep.memory.working = true;
		creep.moveTo(Container.pos.x - 1, Container.pos.y - 1);
		creep.say("WFC⏳❌");
	}
};
export const noMoveWithdrawFromContainer = (creep: Creep, ContainerId: string, resourceType: ResourceConstant) => {
	//从所给ID拿资源,如果能量为0则creep.memory.working = true
	let Container = Game.getObjectById<StructureContainer>(ContainerId)!;
	if (Container.store.energy !== 0) {
		let result = creep.withdraw(Container, resourceType);
		creep.say(`${result}`);
		if (result == OK) creep.cancelOrder(MOVE);
	}
};
