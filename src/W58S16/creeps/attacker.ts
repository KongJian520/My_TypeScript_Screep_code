const roleAttacker = {
    //I won't show my changes on this file for now


    run: function (creep: any) {
        const Home = 'W58S16';
        if (creep.room.name != Home) {
            creep.moveTo(new RoomPosition(25, 25, 'W58S16'), {visualizePathStyle: {stroke: '#ff0000'}})
        } else if (creep.room.name == Home) {
            creep.memory.target = !creep.my;
            if (creep.memory.target) {
                if (creep.attack(creep.memory.target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.memory.target, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            } else {
                creep.moveTo(new RoomPosition(30, 23, 'W58S16'), {visualizePathStyle: {stroke: '#ff0000'}})
                creep.say('A 待命')
            }
        }
    }

}

export default roleAttacker;
