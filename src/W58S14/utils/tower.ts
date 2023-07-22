// 导入screeps的类型定义

const tower = {

    run: function () {
        // 定义一个数组来存储想要修复的建筑类型
        const repairTypes = [STRUCTURE_CONTAINER, STRUCTURE_ROAD, STRUCTURE_RAMPART, STRUCTURE_WALL];
        // 定义一个常量来表示最大损伤值
        const maxDamage = 10000;
        // 在房间中找到所有的塔
        let towers = Game.rooms['W58S16'].find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_TOWER } }) as StructureTower[];
        // 遍历每个塔
        for (let tower of towers) {


            var closestDamagedStructure = tower.room.find(FIND_STRUCTURES, {
                filter: (structure: Structure) => {
                    return (structure.structureType == STRUCTURE_TOWER
                        || structure.structureType == STRUCTURE_CONTAINER
                        // || structure.structureType == STRUCTURE_ROAD
                        || structure.structureType == STRUCTURE_RAMPART
                        // || structure.structureType == STRUCTURE_WALL
                        && // 判断建筑损伤是否小于最大值
                        structure.hits < structure.hitsMax * 0.02
                    )
                }
            });
            // 找到最近的敌人
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            // 如果有敌人，就攻击
            if (closestHostile) {
                console.log(tower.id + " 发现敌人,返回值：" + tower.attack(closestHostile))
                tower.attack(closestHostile);
                // 如果没有敌人，且有受损建筑，且塔有足够能量，就修复
            } else if (closestDamagedStructure && tower.store.energy >= 0) {
                for (let index = 0; index < closestDamagedStructure.length; index++) {

                    tower.repair(closestDamagedStructure[index]);

                }
                // console.log('Tower:' + tower.id + " 修复受损建筑,返回值：" + tower.repair(closestDamagedStructure[index]) + '目标：' + closestDamagedStructure[0].pos)
            }
        }
    }
}
export default tower
