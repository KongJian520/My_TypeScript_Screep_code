const roledismoveabletrasfer = {
    run: function (creep: Creep) {

        const W58S16 = 'W58S16'
        const terminal = Game.rooms[W58S16].terminal
        var targetLink = Game.getObjectById('64b5d08fd3a05b4f1f6f0325') as StructureLink;

        var Storage = creep.room.find(FIND_STRUCTURES, { filter: (structure: any) => { return (structure.structureType == STRUCTURE_STORAGE) } });
        var LinkStore = _.keys(targetLink.store)
        var CreepStore = _.keys(creep.store)
        if (LinkStore[0]) {
            if (LinkStore[0].length > 0) {
                creep.withdraw(targetLink, LinkStore[0] as ResourceConstant)
                creep.transfer(Storage[0], CreepStore[0] as ResourceConstant)
            }
        }
        creep.transfer(Storage[0], CreepStore[0] as ResourceConstant)
        if (creep.ticksToLive !== undefined && creep.ticksToLive < 500) {
            Game.spawns['Spawn1'].renewCreep(creep)
        }
        if (targetLink.store[RESOURCE_ENERGY] == 0) {
            if (terminal) {
                if (terminal.store[RESOURCE_ENERGY] <= 20000) {
                    creep.withdraw(Storage[0], RESOURCE_ENERGY)
                    creep.transfer(terminal, RESOURCE_ENERGY)
                } else {
                    creep.withdraw(terminal, RESOURCE_ENERGY)
                    creep.transfer(Storage[0], RESOURCE_ENERGY)
                }

            }
        }

    }
}
export default roledismoveabletrasfer

