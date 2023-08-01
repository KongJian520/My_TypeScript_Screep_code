
const autoSpawn = {
    spawn: function () {
        let newName;
      const Spawn = Game.spawns["Spawn1"]
        const W58S15 = 'W58S15'
        const W58S14 = 'W58S14'
        const W58S13 = 'W58S13'
        const roomW58S15 = Game.rooms[W58S15]; // 尝试获取房间对象
        const roomW58S14 = Game.rooms[W58S14]; // 尝试获取房间对象
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');//1
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');//2
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');//3
        // var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');//1
        var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');//1
        var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repair');//1
        var dismoveableminers = _.filter(Game.creeps, (creep) => creep.memory.role == 'dismoveableminer');//1
        var dismoveableminer2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'dismoveableminer2');//1
        var Dismveableminer3s = _.filter(Game.creeps, (creep) => creep.memory.role == 'Dismveableminer3');//1

        var Collectors = _.filter(Game.creeps, (creep) => creep.memory.role == 'collector');//1
        var Attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');//1
        var claims = _.filter(Game.creeps, (creep) => creep.memory.role == 'claim');//1
        var ChaiQians = _.filter(Game.creeps, (creep) => creep.memory.role == 'ChaiQian');//1
        var remoteHavsters = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteHavster');//1
        var RemoteHavster2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteHavster2');//1
        var remoteBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteBuilder');//1
        var transfers = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer');//1
        var remoteAttackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteAttacker')
        var HealerW58S16s = _.filter(Game.creeps, (creep) => creep.memory.role == 'HealerW58S16')
        var RemoteAttackerW58S14s = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteAttackerW58S14');
        var RemoteUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteUpgrader')
        var thiefs = _.filter(Game.creeps, (creep) => creep.memory.role == 'thief')
        var eyes = _.filter(Game.creeps, (creep) => creep.memory.role == 'eye')
        var RemoteRepairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'RemoteRepair')
        var roledismoveabletrasfers = _.filter(Game.creeps, (creep) => creep.memory.role == 'dismoveabletrasfer')
        if (Game.time % 1 === 0) {
            // console.log(
            //     "\r" + "======Creeps======"
            //     + "\r" + "haverster =\t" + harvesters.length
            //     + "\r" + "transfers =" + "\t" + transfers.length
            //     + "\r" + "carriers =" + "\t" + carriers.length
            //     + "\r" + "upgraders =" + "\t" + upgraders.length
            //     + "\r" + "builders =" + "\t" + builders.length
            //     + "\r" + "repairs =" + "\t" + repairs.length
            //     + "\r" + "Collectors =" + "\t" + Collectors.length
            //     + "\r" + "eyes    =" + "\t" + eyes.length
            //     + "\r" + "thiefs   =" + "\t" + thiefs.length
            //     + "\r" + "ChaiQians =" + "\t" + ChaiQians.length
            //     + "\r" + "remoteA =" + "\t" + remoteAttackers.length
            //     + "\r" + "remoteH =" + "\t" + remoteHavsters.length
            //     + "\r" + "remoteB =" + "\t" + remoteBuilders.length
            //     + "\r" + "remoteU =" + "\t" + roleRemoteUpgraders.length
            //     + "\r======================="
            // )
        }

        // console.log('spawn acvitied')
        if (harvesters.length == 0) {
            newName = 'harvester_' + Game.time;
            // console.log('Spawning new harvester: ' + newName);
            Spawn.spawnCreep([WORK, CARRY, MOVE], newName,
                { memory: { role: 'harvester', room: '', working: false } });
        } else {
            console.log('满足:harvesters.length == 1')
            if (dismoveableminers.length == 0) {
              newName = 'dismoveableminer_' + Game.time;
              Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE], newName,
                    { memory: { role: 'dismoveableminer', room: '', working: false } });
            }
            if (dismoveableminer2s.length == 0) {
                newName = 'dismoveableminer2_' + Game.time;
                Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE], newName,
                    { memory: { role: 'dismoveableminer2', room: '', working: false } });
            }
            if (dismoveableminers.length === 1 && dismoveableminer2s.length === 1) {
                console.log('满足:dis and dis2')
                if (roledismoveabletrasfers.length === 0) {
                    newName = 'roledismoveabletrasfer_' + Game.time;
                    Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE], newName,
                        { directions: [BOTTOM_RIGHT], memory: { role: 'dismoveabletrasfer', room: '', working: false } });
                } else if (Collectors.length < 1) {
                    newName = 'Collector_' + Game.time;
                    Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'collector', room: '', working: false } });
                }
                if (carriers.length < 2) {
                    newName = 'carrier_' + Game.time;
                    Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                        { memory: { role: 'carrier', room: '', working: false } });
                } else {
                    if (transfers.length == 0) {
                        newName = 'transfer_' + Game.time;
                        Spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                            { memory: { role: 'transfer', room: '', working: false } });
                    }
                    else {
                        if (RemoteUpgraders.length < 2) {
                            newName = 'RemoteUpgrader_' + Game.time;
                            Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'RemoteUpgrader', room: '', working: false } });
                        }
                        if (upgraders.length < 4) {
                            newName = 'Upgrader_' + Game.time;
                            Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'upgrader', room: '', working: false } });
                        } else if (repairs.length < 1) {
                            newName = 'repair_' + Game.time;
                            Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'repair', room: '', working: false } });
                        } else if (builders.length == 0) {
                            newName = 'Builder_' + Game.time;
                            Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'builder', room: '', working: false } });
                        }
                        else if (Dismveableminer3s.length == 0) {
                            newName = 'Dismveableminer3_' + Game.time;
                            Spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE], newName,
                                { memory: { role: 'Dismveableminer3', room: '', working: false} });
                        }
                        // if (thiefs.length < 2) {
                        //     var newName = 'thief_' + Game.time;
                        //     Spawn.spawnCreep([CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,], newName,
                        //         { memory: { role: 'thief', room: '', working: false } });
                        // }
                        else {
                            if (roomW58S15) {
                                console.log('有' + W58S15 + '的视野')
                                var controller = roomW58S15.controller
                                if (remoteHavsters.length < 2) {
                                    newName = 'remoteHavster_' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'remoteHavster', room: '', working: false } });
                                }
                                if (RemoteHavster2s.length < 2) {
                                    newName = 'remoteHavster2_' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteHavster2', room: '', working: false } });
                                } else if (RemoteRepairs.length < 1) {
                                    newName = 'RemoteRepair_' + Game.time;
                                    Spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteRepair', room: '', working: false } });
                                } else
                                    //  if (Game.rooms['W58S16'].find(FIND_HOSTILE_CREEPS).length > 0) {}
                                    if (Attackers.length < 1) {
                                        newName = 'Attacker_' + Game.time;
                                        Spawn.spawnCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE], newName,
                                            { memory: { role: 'attacker', room: '', working: false } });
                                    }
                                // if (RemoteAttackerW58S14s.length !== 0) {
                                //     if (HealerW58S16s.length < 2) {
                                //         var newName = 'HealerW58S16_' + Game.time;
                                //         Spawn.spawnCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,], newName,
                                //             { memory: { role: 'HealerW58S16', room: '', working: false} });
                                //     }
                                // }
                                if (ChaiQians.length == 0) {
                                    newName = 'ChaiQian_' + Game.time;
                                    Spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,], newName,
                                        { memory: { role: 'ChaiQian', room: '', working: false } });
                                }
                                if (remoteAttackers.length == 0) {
                                    newName = 'remoteAttacker|' + Game.time;
                                    Spawn.spawnCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'remoteAttacker', room: '', working: false } });
                                }
                                if (RemoteAttackerW58S14s.length == 0) {
                                    newName = 'RemoteAttacker|W58S14' + Game.time;
                                    Spawn.spawnCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'RemoteAttackerW58S14', room: '', working: false } });
                                }
                                // if (Game.rooms["W58S15"].find(FIND_CONSTRUCTION_SITES) !== undefined) {
                                //     console.log("W58S15"+Game.rooms["W58S15"].find(FIND_CONSTRUCTION_SITES)as string)
                                // }
                                if (controller !== undefined) {
                                    console.log(W58S15 + "的房间控制器找到了")
                                    if (!controller.my) {
                                        if (claims.length < 1) {
                                            newName = 'Claim_' + Game.time;
                                            Spawn.spawnCreep([CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE], newName + Game.time,
                                                { memory: { role: 'claim', room: '', working: false } });
                                        }
                                    } else {
                                        if (controller.reservation?.ticksToEnd) {
                                            if (controller.reservation?.ticksToEnd < 4500) {
                                                if (claims.length < 1) {
                                                    console.log('正在制造claim')
                                                    newName = 'Claim_' + Game.time;
                                                    Spawn.spawnCreep([CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE], newName + Game.time,
                                                        { memory: { role: 'claim', room: '', working: false } });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (!roomW58S15) {
                                console.log("没有" + W58S15 + "的视野,正在派遣");
                                if (eyes.length < 1) {
                                    newName = 'eye' + Game.time;
                                    Spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE], newName,
                                        { memory: { role: 'eye', room: '', working: false } });
                                    console.log("没有" + W58S15 + "的视野,正在派遣");
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
