const tower = {
    run: function () {
        var tower = Game.getObjectById('64ac1e90f1c150551e40d1cb') as StructureTower;
        var tower2 = Game.getObjectById('64b54efa2004544b7bbd76d4') as StructureTower;
        if (tower) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure: Structure) => {
                    return (
                        (structure.structureType == STRUCTURE_CONTAINER
                            // structure.structureType==STRUCTURE_ROAD||
                            // structure.structureType == STRUCTURE_RAMPART
                            // structure.structureType == STRUCTURE_WALL
                        ) && structure.hits < structure.hitsMax)
                }
            });
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            } else if (closestDamagedStructure && tower.store.energy >= 0) {
                tower.repair(closestDamagedStructure);
            }
        }
        if (tower2) {
            var closestDamagedStructure = tower2.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure: Structure) => {
                    return (
                        (
                            structure.structureType == STRUCTURE_CONTAINER
                            // structure.structureType==STRUCTURE_ROAD||
                            // structure.structureType == STRUCTURE_RAMPART
                            // structure.structureType == STRUCTURE_WALL
                        ) && structure.hits < structure.hitsMax)
                }
            });
            var closestHostile = tower2.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            } else if (closestDamagedStructure && tower2.store.energy >= 0) {
                tower.repair(closestDamagedStructure);
            }
        }
    }
}
export default tower
