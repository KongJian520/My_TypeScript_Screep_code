const link = {
	run: function () {
		console.log("---------Link--------------");
		const sourceLink1 = Game.getObjectById("64d8af98ac37e89133229d57") as StructureLink;
		// const sourceLink2 = Game.getObjectById("64c3dcfa7b156580e8312d07") as StructureLink;
		const targetLink = Game.getObjectById("64d8b4cff2c47840be0a67b0") as StructureLink;
		// 检查link是否存在并且有足够的能量
		if (sourceLink1 && targetLink && sourceLink1.store[RESOURCE_ENERGY] > 0) {
			// 尝试从源link传输能量到目标link
			// 打印传输结果
			console.log("result: " + sourceLink1.transferEnergy(targetLink));
		}
		// if (sourceLink2 && targetLink && sourceLink2.store[RESOURCE_ENERGY] > 0) {
		// 	// RESOURCE_ENERGY
		// 	// 打印传输结果
		// 	console.log("Transfer2 result: " + sourceLink2.transferEnergy(targetLink));
		// }
	}
};
export default link;
