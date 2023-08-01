// 导入screeps的类型定义

const tower = {
    run: function (tower: StructureTower) {
        // 在房间中找到所有需要修复的建筑
        const damagedStructures = tower.room.find(FIND_STRUCTURES, {
            filter: (structure: Structure) => {
                return ((structure.structureType == STRUCTURE_TOWER
                        || structure.structureType == STRUCTURE_CONTAINER
                        || structure.structureType == STRUCTURE_ROAD
                        || structure.structureType == STRUCTURE_SPAWN
                        || structure.structureType == STRUCTURE_RAMPART
                        // || structure.structureType == STRUCTURE_WALL
                    ) && // 判断建筑损伤是否小于最大值
                    (structure.hits < 100000000 && structure.hits != structure.hitsMax)
                )
            }
        });
        damagedStructures.sort((a, b) => {
            return a.hits - b.hits;
        });

        // 找到最近的敌人
        const closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        const closestMyCreep = tower.pos.findClosestByRange(FIND_MY_CREEPS, {
            filter: (MY_creep: Creep) => {
                return (MY_creep.hits < MY_creep.hitsMax)
            }
        });

        // 如果有敌人，就攻击
        if (closestHostile) {
            console.log(tower.id + " 发现敌人,返回值：" + tower.attack(closestHostile))
            tower.attack(closestHostile);
        } else if (closestMyCreep) {
            tower.heal(closestMyCreep);
        } else {
            // 如果没有敌人，且有受损建筑，且塔有足够能量，就修复
            if (damagedStructures.length > 0) {
                console.log(tower.id + " 发现损坏的建筑:" + damagedStructures[0].pos)
                tower.repair(damagedStructures[0]);
            }
        }
    }
};

export default tower;
