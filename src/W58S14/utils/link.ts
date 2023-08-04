const link = {
	run: function () {
		const sourceLink1 = Game.getObjectById("64c0730c64271e64bf03f388") as StructureLink;
		const sourceLink2 = Game.getObjectById("64cc45f41e08d22776b1565b") as StructureLink;
		const targetLink = Game.getObjectById("64c079136835debeda4182fd") as StructureLink;
		// 检查link是否存在并且有足够的能量
		if (sourceLink1 && targetLink && sourceLink1.store[RESOURCE_ENERGY] >= LINK_CAPACITY * 0.3) {
			// 尝试从源link传输能量到目标link
			// 打印传输结果
			console.log("Transfer1 result: " + sourceLink1.transferEnergy(targetLink));
		}
		if (sourceLink2 && targetLink && sourceLink2.store[RESOURCE_ENERGY] >= LINK_CAPACITY * 0.5) {
			// RESOURCE_ENERGY
			// 打印传输结果
			console.log("Transfer2 result: " + sourceLink2.transferEnergy(targetLink));
		}
	}
};
export default link;
