const roleGuard = {
    run(creep: Creep): void {
        const target: any = creep.room.find(FIND_STRUCTURES, {
            filter: (structure: Structure) => {
                return (structure.structureType == STRUCTURE_INVADER_CORE)
            }
        })
        target.push(creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS))
        if (target) {
            if (creep.attack(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ff0000'}});
            }
        } else {
            creep.moveTo(creep.room.controller!, {visualizePathStyle: {stroke: '#ffffff'}});
        }
    },
};

export default roleGuard;
