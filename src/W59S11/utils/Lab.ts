const Lab = {
	run: function () {
		const Lab1 = Game.getObjectById("64c3e1f07e68f82e2d5f13fa") as StructureLab;
		const Lab2 = Game.getObjectById("64c39dae5785eddb4042cbb6") as StructureLab;
		const Lab3 = Game.getObjectById("64c3f9afb10a865fabd2ebf0") as StructureLab;

		if (Lab1.mineralType == "G" && Lab2.mineralType == "H") {
			this.runReactionGH();
		}
		if (Lab3.mineralType == "GO") {
			this.reverseReactionGO();
		}
	},
	reverseReactionGO: function () {
		console.log("=====分解GO=======");
		if (Lab3.mineralType == "GO") {
			switch (Lab3.reverseReaction(Lab1, Lab2)) {
				case 0:
					console.log("成功分解");
					break;
				case -6:
					console.log("没有足够的可供分解");
					break;
				case -8:
					console.log("有输出 lab 无法存放更多资源。");
					break;
				case -10:
					console.log("该资源无法进行还原。");
					break;
				case -11:
					console.log("该 lab 尚在冷却");
					break;
				case -14:
					console.log("房间控制器等级不足。");
					break;
			}
		}
	},
	runReactionGH: function () {
		console.log("=====合成GH=======");
		if (Lab1.mineralType == "G" && Lab2.mineralType == "H") {
			switch (Lab3.runReaction(Lab1, Lab2)) {
				case 0:
					console.log("成功合成GH");
					break;
				case -6:
					console.log("没有足够资源的可供合成");
					break;
				case -8:
					console.log("Lab3满了");
					break;
				case -10:
					console.log("该资源无法合成");
					break;
				case -11:
					console.log("该 lab 尚在冷却");
					break;
				case -14:
					console.log("房间控制器等级不足。");
					break;
			}
		}
	}
};
export default Lab;
