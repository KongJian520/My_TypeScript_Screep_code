const roledismoveabletrasfer = {
    run: function (creep: Creep) {
        creep.moveTo(new RoomPosition(32, 37, 'W58S16'))
        var targetLink = Game.getObjectById('64b5d08fd3a05b4f1f6f0325') as StructureLink;
        var sources = creep.room.find(FIND_STRUCTURES, { filter: (structure: any) => { return (structure.structureType == STRUCTURE_STORAGE) } });
        creep.withdraw(targetLink, RESOURCE_ENERGY)
        creep.transfer(sources[0],RESOURCE_ENERGY)
        Game.spawns['Spawn1'].renewCreep(creep)
    }
}
export default roledismoveabletrasfer
