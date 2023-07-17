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
        var thiefs = _.filter(Game.creeps, (creep) => creep.memory.role == 'thief')
        var eyes = _.filter(Game.creeps, (creep) => creep.memory.role == 'eye')
        if (Game.time % 1 === 0) {
            console.log("Game.time = " + Game.time +
                "\r" + "haverster =\t" + harvesters.length
                + "\r" + "transfers =" + "\t" + transfers.length
                + "\r" + "carriers =" + "\t" + carriers.length
                + "\r" + "upgraders =" + "\t" + upgraders.length
                + "\r" + "builders =" + "\t" + builders.length
                + "\r" + "repairs =" + "\t" + repairs.length
                + "\r" + "Collectors =" + "\t" + Collectors.length
                + "\r" + "eyes    =" + "\t" + eyes.length
                + "\r" + "thiefs   =" + "\t" + thiefs.length
                + "\r" + "ChaiQians =" + "\t" + ChaiQians.length
                + "\r" + "remoteA =" + "\t" + remoteAttackers.length
                + "\r" + "remoteH =" + "\t" + remoteHavsters.length
                + "\r" + "remoteB =" + "\t" + remoteBuilders.length

            )
        }
        // console.log('spawn acvitied')
        if (harvesters.length == 0) {
            var newName = 'harvester_' + Game.time;
            // console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
                { memory: { role: 'harvester', room: '', working: false, needToRenew: false } });
        } else {
            console.log('满足:harvesters.length == 1')
            if (dismoveableminers.length == 0) {
                var newName = 'dismoveableminer_' + Game.time;
                Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: 'dismoveableminer', room: '', working: false, needToRenew: false } });
            }
            if (dismoveableminer2s.length == 0) {
                var newName = 'dismoveableminer2_' + Game.time;
                Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, MOVE], newName,
                    { memory: { role: 'dismoveableminer2', room: '', working: false, needToRenew: false } });
            }
            if (dismoveableminers.length === 1 && dismoveableminer2s.length === 1) {
                console.log('满足:dis and dis2')
                if (Collectors.length < 2) {
                    var newName = 'Collector_' + Game.time;
                    Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'collector', room: '', working: false, needToRenew: false } });
                }
                if (transfers.length < 2) {
                    var newName = 'transfer_' + Game.time;
                    Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'transfer', room: '', working: false, needToRenew: false } });
                } else if (carriers.length < 2) {
                    var newName = 'carrier_' + Game.time;
                    Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'carrier', room: '', working: false, needToRenew: false } });
                } else {
                    if (repairs.length < 2) {
                        var newName = 'repair_' + Game.time;
                        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'repair', room: '', working: false, needToRenew: false } });
                    }
                    if (Game.rooms["W58S16"].find(FIND_CONSTRUCTION_SITES)) {
                        // console.log(Game.rooms["W58S16"].find(FIND_CONSTRUCTION_SITES))
                        if (builders.length < 3) {
                            var newName = 'Builder_' + Game.time;
                            Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'builder', room: '', working: false, needToRenew: false } });
                        }
                    }
                    if (upgraders.length < 3) {
                        var newName = 'Upgrader_' + Game.time;
                        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'upgrader', room: '', working: false, needToRenew: false } });
                    } else {
                        const roomName = 'W58S15'
                        const room = Game.rooms[roomName]; // 尝试获取房间对象
                        if (room) {
                            console.log('有' + roomName + '的视野')
                            // if (thiefs.length < 4) {
                            //     var newName = 'thief_' + Game.time;
                            //     Game.spawns['Spawn1'].spawnCreep([ CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,  MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                            //         { memory: { role: 'thief', room: '', working: false, needToRenew: false } });
                            // }
                            if (remoteHavsters.length < 4) {
                                var newName = 'remoteHavster_' + Game.time;
                                Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                                    { memory: { role: 'remoteHavster', room: '', working: false, needToRenew: false } });
                            } else
                                if (ChaiQians.length < 4) {
                                    var newName = 'ChaiQian_' + Game.time;
                                    Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY], newName,
                                        { memory: { role: 'ChaiQian', room: '', working: false, needToRenew: false } });
                                }
                                if (Game.rooms['W58S15'].find(FIND_HOSTILE_CREEPS)||Game.getObjectById('64b3d151e63b0503d14d288f')) {
                                    if (Game.rooms['W58S15'].find(FIND_HOSTILE_CREEPS).length > 0) {
                                        console.log("===============================")
                                        console.log("FIND_HOSTILE_CREEPS!!!!!!!!!!!!")
                                        console.log("===============================")
                                        if (remoteAttackers.length < 4) {
                                            var newName = 'remoteAttacker_' + Game.time;
                                            Game.spawns['Spawn1'].spawnCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE], newName,
                                                { memory: { role: 'remoteAttacker', room: '', working: false, needToRenew: false } });
                                        }
                                    }
                                }
                            // if (Game.rooms["W58S15"].find(FIND_CONSTRUCTION_SITES) !== undefined) {
                            //     console.log("W58S15"+Game.rooms["W58S15"].find(FIND_CONSTRUCTION_SITES)as string)
                            //     if (remoteBuilders.length < 2) {
                            //         var newName = 'remoteBuilder_' + Game.time;
                            //         Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK,  WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName,
                            //             { memory: { role: 'remoteBuilder', room: '', working: false, needToRenew: false } });
                            //     }
                            // }
                            var controller = Game.rooms["W58S15"].controller
                            if (controller !== undefined) {
                                if (controller.reservation?.ticksToEnd) {
                                    console.log("房间W58S15控制器找到了")
                                    if (controller.reservation?.ticksToEnd < 4500) {
                                        if (claims.length < 2) {
                                            var newName = 'Claim_' + Game.time;
                                            Game.spawns['Spawn1'].spawnCreep([CLAIM, MOVE, MOVE, MOVE, MOVE], newName + Game.time,
                                                { memory: { role: 'claim', room: '', working: false, needToRenew: false } });
                                        }
                                    }
                                } else {
                                    if (claims.length < 2) {
                                        var newName = 'Claim_' + Game.time;
                                        Game.spawns['Spawn1'].spawnCreep([CLAIM, MOVE, MOVE, MOVE, MOVE], newName + Game.time,
                                            { memory: { role: 'claim', room: '', working: false, needToRenew: false } });
                                    }
                                }
                            }
                        } else {
                            console.log("没有" + roomName + "的视野,正在派遣");
                            if (eyes.length < 1) {
                                var newName = 'eye' + Game.time;
                                Game.spawns['Spawn1'].spawnCreep([MOVE, MOVE, MOVE, MOVE], newName,
                                    { memory: { role: 'eye', room: '', working: false, needToRenew: false } });
                                console.log("没有" + roomName + "的视野,正在派遣");
                            }
                        }
                    }
                }
            }
        }
    }
}



export default autoSpawn;
