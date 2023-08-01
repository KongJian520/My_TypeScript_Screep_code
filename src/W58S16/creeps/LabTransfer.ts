const roletransfer = {

    runLabGO: function (creep: Creep) {

        var storage = Game.getObjectById('64ae33b7d36572291f61089a') as StructureStorage
        var Lab1 = Game.getObjectById('64c3e1f07e68f82e2d5f13fa') as StructureLab
        var Lab2 = Game.getObjectById('64c39dae5785eddb4042cbb6') as StructureLab
        var Lab3 = Game.getObjectById('64c3f9afb10a865fabd2ebf0') as StructureLab

        var GO = RESOURCE_GHODIUM_OXIDE

        // creep.memory.goods
        if (creep.memory.working && creep.store[GO] == 0) {
            creep.memory.working = false;
            creep.say('准备放置GO');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = true;
            creep.say('向仓库移动');
        }
        if (creep.memory.working) {
            if (creep.withdraw(Lab3, RESOURCE_GHODIUM_OXIDE) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Lab3)
            }
        } else {
            if (creep.transfer(storage, RESOURCE_GHODIUM_OXIDE) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage)
            }
        }
    }
}



export default roletransfer
