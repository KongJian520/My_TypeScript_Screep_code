export const transferToStore = (creep: Creep, ContianerId: string) => {
	let Container = Game.getObjectById<StructureContainer>(ContianerId)!;
	creep.moveTo(Container, {
		visualizePathStyle: { stroke: "#ffaa00" },
		reusePath: 6
	});
	if (Container) {
		for (const resourceType in creep.store) {
			let result = creep.transfer(Container, resourceType as ResourceConstant);
			creep.say(`${result}`);
		}
	} else {
		creep.memory.working = false;
		creep.say("🔍❌");
	}
};
