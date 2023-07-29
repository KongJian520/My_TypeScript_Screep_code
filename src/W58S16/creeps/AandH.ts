const roleRepair = {
    run: function (creep: Creep) {

        // 假设你有一个名为attacker的creep，它有ATTACK和HEAL部件
        var attacker = Game.creeps['attacker'];
        // 假设你想攻击的房间名为W1N1，你可以根据实际情况修改
        var targetRoom = 'W1N1';
        // 假设你想攻击的spawn名为Spawn1，你可以根据实际情况修改
        var targetSpawn = Game.getObjectById('')
        // 如果creep不在目标房间，就移动到那里
        if (attacker.room.name != targetRoom) {
            attacker.moveTo(new RoomPosition(25, 25, targetRoom));
        }
        // 否则，如果creep在目标房间，就寻找并攻击spawn
        else {
            var spawn = attacker.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_SPAWN && s.name == targetSpawn
            })[0];
            // 如果找到了spawn，就移动并攻击它
            if (spawn) {
                if (attacker.attack(spawn) == ERR_NOT_IN_RANGE) {
                    attacker.moveTo(spawn);
                }
            }
            // 否则，如果没有找到spawn，就随机移动或者做其他事情
            else {

            }
        }
        // 如果creep受到伤害，就治疗自己
        if (attacker.hits < attacker.hitsMax) {
            attacker.heal(attacker);
        }

    }
}
