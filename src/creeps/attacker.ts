const roleAttacker = {
    //I won't show my changes on this file for now


    run: function (creep: any) {

        creep.memory.target = !creep.my;
        if (creep.memory.target) {
            if (creep.attack(creep.memory.target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.memory.target, { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        }
    }

}

export default roleAttacker;
