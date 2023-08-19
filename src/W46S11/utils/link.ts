const link = {
	run: function () {
		const sourceLink1 = Game.getObjectById("64b54598c5f7ddf2f409c8f1") as StructureLink;
		const sourceLink2 = Game.getObjectById("64c3dcfa7b156580e8312d07") as StructureLink;
		const sourceLink3 = Game.getObjectById("64dcea84f805462420214079") as StructureLink;
		const targetLink = Game.getObjectById("64b5d08fd3a05b4f1f6f0325") as StructureLink;
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
