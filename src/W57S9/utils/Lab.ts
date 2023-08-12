const LabW58S16 = {
	run: function () {
		const Lab1 = Game.getObjectById("64c3e1f07e68f82e2d5f13fa") as StructureLab;
		const Lab2 = Game.getObjectById("64c39dae5785eddb4042cbb6") as StructureLab;
		const Lab3 = Game.getObjectById("64c3f9afb10a865fabd2ebf0") as StructureLab;
		if (Lab1.mineralType == "H" && Lab2.mineralType == "G") {
			this.runReactionGH(Lab1, Lab2, Lab3);
		}
		if (Lab3.mineralType == "GO") {
			this.reverseReactionGO(Lab1, Lab2, Lab3);
		}
	},
	reverseReactionGO: function (Lab1: StructureLab, Lab2: StructureLab, Lab3: StructureLab) {
		console.log("=====分解GO=======");
		let result = Lab3.reverseReaction(Lab1, Lab2);
		console.log(`返回值：${result}---冷却时间：${Lab3.cooldown}`);
	},
	runReactionGH: function (Lab1: StructureLab, Lab2: StructureLab, Lab3: StructureLab) {
		console.log("=====合成GH=======");
		let result = Lab3.runReaction(Lab1, Lab2);
		console.log(`返回值：${result}---冷却时间：${Lab3.cooldown}`);
	}
};
export default LabW58S16;
