import { roleDefinitions, BodyPartConstantTuple } from "./creepRoles";

// 定义一个辅助函数来展开身体部件数组
function expandBodyParts(parts: BodyPartConstantTuple[]): BodyPartConstant[] {
	const expandedParts: BodyPartConstant[] = [];
	for (const part of parts) {
		for (let i = 0; i < part[1]; i++) {
			expandedParts.push(part[0]);
		}
	}
	return expandedParts;
}

const autoSpawn = {
	spawn: function (Spawn: StructureSpawn) {
		roleDefinitions.sort((a, b) => a.priority - b.priority); // 按优先级升序排序
		for (const roleDef of roleDefinitions) {
			let role = roleDef.roleName;
			let maxCount = roleDef.expectedCount;
			let currentCount = _.filter(Game.creeps, creep => creep.memory.role === role).length;
			if (currentCount >= maxCount) {
				let judge = "👍";
				console.log(`${judge} 角色: ${role}  当前数量: ${currentCount} - 预期数量: ${maxCount}`);
			} else if (currentCount < maxCount) {
				let judge = "❗";
				console.log(`${judge} 角色: ${role}  当前数量: ${currentCount} - 预期数量: ${maxCount}`);
				// 修改此处的判断条件，使得每个角色都能生成到期望数量
				if (currentCount < maxCount) {
					let newName = `${role}|${Spawn.room.name}|${Game.time}`;
					let parts: BodyPartConstant[] = expandBodyParts(roleDef.bodyParts); // 使用展开后的身体部件数组
					let result = Spawn.spawnCreep(parts, newName, {
						memory: {
							role: role,
							room: Spawn.room.name,
							working: false
						}
					});
					// result 的值将会是一个生成 creep 的状态码
					// 可以根据 result 的值来处理生成 creep 的结果
					if (result === OK) {
						console.log(`🔁 ${Spawn.name}正在生成 ${role}，名称：${newName}`);
						currentCount++;
						break; // 成功生成一个角色后，终止当前循环
					} else {
						console.log(`⚠️${Spawn.name}生成 ${role} 失败，状态码：${result}`);
						break; // 如果生成失败，终止当前循环，避免继续尝试生成优先级更低的角色
					}
				}
			}
		}
	}
};
export default autoSpawn;
