import {
	roleDefinitions,
	BodyPartConstantTuple
} from './creepRoles';

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
			const role = roleDef.roleName;
			let maxCount = roleDef.expectedCount;
			let currentCount = _.filter(Game.creeps, (creep) => creep.memory.role === role).length;
			// 修改此处的判断条件，使得每个角色都能生成到期望数量
			while (currentCount < maxCount) {
				let newName = `${role}|${Spawn.room.name}|${Game.time}`;
				let parts: BodyPartConstant[] = expandBodyParts(roleDef.bodyParts); // 使用展开后的身体部件数组
				let result = Spawn.spawnCreep(parts, newName, {
					memory: {
						role: role,
						room: '',
						working: false
					},
				});
				// result 的值将会是一个生成 creep 的状态码
				// 可以根据 result 的值来处理生成 creep 的结果
				if (result === OK) {
					console.log(`${Spawn.name}正在生成 ${role}，名称：${newName}`);
				} else {
					console.log(`${Spawn.name}生成 ${role} 失败，状态码：${result}`);
					break; // 如果生成失败，则终止循环，避免陷入死循环
				}
			}
		}
	},
};

export default autoSpawn;
