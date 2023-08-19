export const StoreSource = (creep: Creep, ContianerId: string) => {
	let Container = Game.getObjectById<StructureStorage>(ContianerId);
	if (Container) {
		creep.moveTo(Container);
		let CreepCarrySource: ResourceConstant = _.keysIn(creep.store) as unknown as ResourceConstant;
		return creep.transfer(Container, CreepCarrySource);
	} else {
		creep.say("🔍❌");
		return ERR_INVALID_TARGET; // 返回一个错误码，表示无效目标
	}
};
