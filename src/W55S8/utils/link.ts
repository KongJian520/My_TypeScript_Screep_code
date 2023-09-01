const link = {
	run: function () {
		const sourceLink1 = Game.getObjectById("64ea42faf187424606ac1bc5") as StructureLink;
		const sourceLink2 = Game.getObjectById("64ee4e4d80d819c8939205ae") as StructureLink;
		const sourceLink3 = Game.getObjectById("64dcea84f805462420214079") as StructureLink;
		const targetLink = Game.getObjectById("64ea9c1a6d28a3d895716c86") as StructureLink;
		// 检查link是否存在并且有足够的能量
		if (sourceLink1 && targetLink && sourceLink1.store[RESOURCE_ENERGY] !== 0 && sourceLink1.cooldown == 0) {
			// 尝试从源link传输能量到目标link
			// 打印传输结果
			console.log("Transfer1 result: " + sourceLink1.transferEnergy(targetLink));
		}
		if (sourceLink2 && targetLink && sourceLink2.store[RESOURCE_ENERGY] !== 0 && sourceLink2.cooldown == 0) {
			// RESOURCE_ENERGY
			// 打印传输结果
			console.log("Transfer2 result: " + sourceLink2.transferEnergy(targetLink));
		}
		if (sourceLink3 && targetLink && sourceLink3.store[RESOURCE_ENERGY] !== 0 && sourceLink3.cooldown == 0) {
			// RESOURCE_ENERGY
			// 打印传输结果
			console.log("Transfer3 result: " + sourceLink3.transferEnergy(targetLink));
		}
	}
};
export default link;
