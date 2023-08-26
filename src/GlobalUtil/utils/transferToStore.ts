export const transferToStore = (creep: Creep, ContianerId: string) => {
	//将物品放置到ID,如果能量为0则creep.memory.working = true
	let Container = Game.getObjectById<StructureContainer>(ContianerId)!;
	creep.moveTo(Container, {
		visualizePathStyle: { stroke: "#ffaa00" },
		reusePath: 10
	});
	if (Container) {
		for (const resourceType in creep.store) {
			let result = creep.transfer(Container, resourceType as ResourceConstant);
			creep.say(`${result}`);
			if (result == OK) creep.cancelOrder(MOVE);
		}
	} else {
		creep.memory.working = true;
		// creep.say("TTS🔍❌");
	}
};
