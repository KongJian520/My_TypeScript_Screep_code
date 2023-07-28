const roledismoveabletrasferW58S14 = {
    run: function (creep: Creep) {
        // creep.moveTo(new RoomPosition(32, 37, 'W58S14'))
        var targetLink = Game.getObjectById('64c079136835debeda4182fd') as StructureLink;
        var sources = creep.room.find(FIND_STRUCTURES, { filter: (structure: any) => { return (structure.structureType == STRUCTURE_STORAGE) } });
        creep.withdraw(targetLink, RESOURCE_ENERGY)
        creep.transfer(sources[0],RESOURCE_ENERGY)
        Game.spawns['Spawn2'].renewCreep(creep)
    }
}
export default roledismoveabletrasferW58S14
