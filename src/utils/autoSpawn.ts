const autoSpawn = {
    spawn: function () {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');//1
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');//2
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');//3
        // var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');//1
        var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');//1
        var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repair');//1
        var dismoveableminers = _.filter(Game.creeps, (creep) => creep.memory.role == 'dismoveableminer');//1
        var dismoveableminer2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'dismoveableminer2');//1
        var Collectors = _.filter(Game.creeps, (creep) => creep.memory.role == 'collector');//1
        var Attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');//1
        var claims = _.filter(Game.creeps, (creep) => creep.memory.role == 'claim');//1
        var ChaiQians = _.filter(Game.creeps, (creep) => creep.memory.role == 'ChaiQian');//1
        var remoteHavsters = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteHavster');//1
        var remoteBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteBuilder');//1
        var transfers = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer');//1
        var remoteAttackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteAttacker')

        if (Game.time % 2 === 1) {
            console.log(
                "\r"+"haverster =\t" + harvesters.length
                + "\r" + "upgraders =" + "\t" + upgraders.length
                + "\r" + "builders =" + "\t" + builders.length
                + "\r" + "carriers =" + "\t" + carriers.length
                + "\r" + "repairs =" + "\t" + repairs.length
                + "\r" + "Collectors =" + "\t" + Collectors.length
                + "\r" + "remoteH =" + "\t" + remoteHavsters.length
                + "\r" + "remoteB =" + "\t" + remoteBuilders.length
                + "\r" + "transfers =" + "\t" + transfers.length

                + "\r" + "ChaiQians =" + "\t" + ChaiQians.length
            )
        }
        // console.log('spawn acvitied')
        if (harvesters.length == 0) {
            var newName = 'harvester_' + Game.time;
            // console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, MOVE], newName,
                { memory: { role: 'harvester', room: '', working: false } });
        } else {
            // if (Game.rooms["W58S15"].find(FIND_HOSTILE_CREEPS||STRUCTURE_RAMPART).length > 0) {
            // }
            if (dismoveableminers.length == 0) {
                var newName = 'dismoveableminer_' + Game.time;
                Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: 'dismoveableminer', room: '', working: false } });
            }
            if (dismoveableminer2s.length == 0) {
                var newName = 'dismoveableminer2_' + Game.time;
                Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: 'dismoveableminer2', room: '', working: false } });
            }
            if (dismoveableminers.length === 1 && dismoveableminer2s.length === 1) {
                if (transfers.length < 4) {
                    var newName = 'transfer_' + Game.time;
                    Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'transfer', room: '', working: false } });
                }
                if (ChaiQians.length < 4) {
                    var newName = 'ChaiQian_' + Game.time;
                    Game.spawns['Spawn1'].spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY], newName,
                        { memory: { role: 'ChaiQian', room: '', working: false } });
                }
                if (carriers.length < 4) {
                    var newName = 'carrier_' + Game.time;
                    Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'carrier', room: '', working: false } });
                }
            } else {
                if (upgraders.length < 6) {
                    var newName = 'Upgrader_' + Game.time;
                    Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'upgrader', room: '', working: false } });
                }
                if (Game.rooms["W58S15"].find(FIND_HOSTILE_CREEPS)) {
                    if (remoteAttackers.length < 4) {
                        var newName = 'remoteAttacker_' + Game.time;
                        Game.spawns['Spawn1'].spawnCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'remoteAttacker', room: '', working: false } });
                    }
                }
                if (Collectors.length < 2) {
                    var newName = 'Collector_' + Game.time;
                    Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'collector', room: '', working: false } });
                } else {
                    if (Game.rooms["W58S16"].find(FIND_CONSTRUCTION_SITES)) {
                        // console.log(Game.rooms["W58S16"].find(FIND_CONSTRUCTION_SITES))
                        if (builders.length < 2) {
                            var newName = 'Builder_' + Game.time;
                            Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'builder', room: '', working: false } });
                        }
                    }
                    if (repairs.length < 2) {
                        var newName = 'repair_' + Game.time;
                        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'repair', room: '', working: false } });
                    }
                    // if (Game.rooms["W58S15"].find(FIND_CONSTRUCTION_SITES)) {
                    //     if (remoteBuilders.length < 3) {
                    //         var newName = 'remoteBuilder_' + Game.time;
                    //         Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                    //             { memory: { role: 'remoteBuilder', room: '', working: false } });
                    //     }
                    // }
                    if (remoteHavsters.length < 4) {
                        var newName = 'remoteHavster_' + Game.time;
                        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'remoteHavster', room: '', working: false } });
                    }
                    var controller = Game.rooms["W58S15"].controller
                    if (controller) {
                        if (controller.reservation?.ticksToEnd) {
                            if (controller.reservation?.ticksToEnd < 4500) {
                                if (claims.length < 2) {
                                    var newName = 'Claim_' + Game.time;
                                    Game.spawns['Spawn1'].spawnCreep([CLAIM, MOVE, MOVE, MOVE, MOVE], newName + Game.time,
                                        { memory: { role: 'claim', room: '', working: false } });
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


export default autoSpawn;
