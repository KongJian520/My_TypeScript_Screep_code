// 导入screeps的类型定义

const tower = {
	run: function (tower: StructureTower) {
		// 在房间中找到所有需要修复的建筑
		const damagedStructures = tower.room.find(FIND_STRUCTURES, {
			filter: (structure: Structure) => {
				return (
					(structure.structureType == STRUCTURE_TOWER ||
						structure.structureType == STRUCTURE_CONTAINER ||
						structure.structureType == STRUCTURE_ROAD ||
						structure.structureType == STRUCTURE_SPAWN ||
						structure.structureType == STRUCTURE_RAMPART) && // 判断建筑损伤是否小于最大值
					// || structure.structureType == STRUCTURE_WALL

					structure.hits != structure.hitsMax
				);
			}
		});
		damagedStructures.sort((a, b) => {
			return a.hits - b.hits;
		});
		if (damagedStructures.length > 0) {
			tower.repair(damagedStructures[0]);
		}
	}
};

export default tower;
