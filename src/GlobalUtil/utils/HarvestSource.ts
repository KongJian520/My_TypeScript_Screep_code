//挖矿模块，默认工作为挖矿，没有矿时将切换为非跳出

export const HarvestSource = (creep: Creep, SourceID: string): ScreepsReturnCode => {
	const source = Game.getObjectById<Source>(SourceID);
	if (source) {
		creep.moveTo(source, {
			visualizePathStyle: { stroke: "#ffffff" },
			reusePath: 10
		});
		return creep.harvest(source);
	} else {
		creep.say("🔍❌");
		return ERR_INVALID_TARGET; // 返回一个错误码，表示无效目标
	}
};
