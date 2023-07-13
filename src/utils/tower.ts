const tower = {
    run: function () {
        var tower = Game.getObjectById('64ac1e90f1c150551e40d1cb') as StructureTower;
        if (tower) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (
                        (structure.structureType == STRUCTURE_CONTAINER||
                            // structure.structureType==STRUCTURE_ROAD||
                            structure.structureType == STRUCTURE_RAMPART
                            // structure.structureType == STRUCTURE_WALL
                        ) && structure.hits < structure.hitsMax*0.01)
                }
            });
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

            if (closestHostile) {
                tower.attack(closestHostile);
            } else if (closestDamagedStructure && tower.store.energy >= 500) {
                tower.repair(closestDamagedStructure);
            }
        }
    }
}
export default tower
